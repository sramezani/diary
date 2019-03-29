
// Consts and Libs
import { Labels, APIConfig } from '@constants/';
import { Util } from '@lib/';
// import JWT from '@lib/api.jwt';

// Config
const HOSTNAME = APIConfig.hostname;
// const Token = new JWT();
let requestCounter = 0; // Number each API request (used for debugging)

/* Helper Functions ==================================================================== */
function debug(title, url, body, method, headers) {
    if (__DEV__) {
        const d = new Date();
        if (console.groupCollapsed) {
            console.groupCollapsed(title, `@ ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}`);
        }
        else {
            console.log(title, `@ ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}.${d.getMilliseconds()}`);
        }
        if (method) console.log('%c method: ', 'color: #e74c3c; font-weight: bold', method);
        if (url) console.log('%c endpoint: ', 'color: #2ecc71; font-weight: bold', url);
        if (body) console.log('%c body: ', 'color: #3498db; font-weight: bold', body);
        if (headers) console.log('%c headers: ', 'color: #e67e22; font-weight: bold', headers);
        if (console.groupEnd) {
            console.groupEnd();
        }
    }
}

/**
  * Convert param object into query string
  * eg.
  *   {foo: 'hi there', bar: { blah: 123, quux: [1, 2, 3] }}
  *   foo=hi there&bar[blah]=123&bar[quux][0]=1&bar[quux][1]=2&bar[quux][2]=3
  */
function serialize(obj, prefix) {
	const str = [];

	Object.keys(obj).forEach((p) => {
		const k = prefix ? `${prefix}[${p}]` : p;
		const v = obj[p];

		str.push((v !== null && typeof v === 'object') ?
      serialize(v, k) :
      `${encodeURIComponent(k)}=${encodeURIComponent(v)}`);
	});

	return str.join('&');
}

/**
  * Sends requests to the API
  */
function fetcher(method, inputEndpoint, inputParams, body) {
	let endpoint = inputEndpoint;
	const params = inputParams;

	return new Promise(async (resolve, reject) => {
		// const network = await NetInfo.isConnected.fetch().then(isConnected => isConnected);
		// if (!network) return reject(Labels.error.networkError);

		requestCounter += 1;
		const requestNum = requestCounter;

        // After x seconds, let's call it a day!
		const timeoutAfter = 5;
		const apiTimedOut = setTimeout(() => (
            reject(Labels.error.timeOut)
        ), timeoutAfter * 1000);

		if (!method || !endpoint) {
			return reject('Missing params (API.fetcher).');
		}

        // Build request
		const req = {
			method: method.toUpperCase(),
			headers: {
                // 'Accept': 'application/json',
                'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded'
			}
		};

		// Add Token
		if (endpoint !== APIConfig.endpoints[0].url) {
			const jwt = await Util.getFromStorage('jwt');
			if (jwt) {
				req.headers.Authorization = `Bearer ${jwt}`;
			}
		}

        // Add Endpoint Params
		let urlParams = '';
		if (params) {
            // Object - eg. /recipes?title=this&cat=2
			if (typeof params === 'object') {
				// Replace matching params in API routes eg. /recipes/{param}/foo
				Object.keys(params).forEach((param) => {
					if (endpoint.includes(`{${param}}`)) {
						endpoint = endpoint.split(`{${param}}`).join(params[param]);
						delete params[param];
					}
				});

                // Check if there's still an 'id' prop, /{id}?
				if (params.id !== undefined) {
					if (typeof params.id === 'string' || typeof params.id === 'number') {
						urlParams = `/${params.id}`;
						delete params.id;
					}
				}
                // Add the rest of the params as a query string
				urlParams = `?${serialize(params)}`;
			}
			else if (typeof params === 'string' || typeof params === 'number') {
				// String or Number - eg. /recipes/23
				urlParams = `/${params}`;
			}
			else {
				// Something else? Just log an error
				debug('You provided params, but it wasn\'t an object!', HOSTNAME + endpoint + urlParams);
			}
		}

        // Add Body
		if (body) {
            // use if => 'Content-Type' : 'application/x-www-form-urlencoded'
			req.body = serialize(body);

            // use if => 'Content-Type' : 'application/json'
            // req.body = JSON.stringify(body);
		}

		const thisUrl = HOSTNAME + endpoint + urlParams;

		debug(`REQUEST #${requestNum}`, HOSTNAME + endpoint, body, req.method, req.headers);

        // Make the request
		return fetch(thisUrl, req)
			.then(async (rawResponse) => {
				// API got back to us, clear the timeout
				clearTimeout(apiTimedOut);
				if (!rawResponse || rawResponse.status !== 200) {
                    throw rawResponse ? rawResponse.status : { message: Labels.error.networkError };
                }
				let jsonResponse = {};
				try {
					jsonResponse = await rawResponse.json();
				}
				catch (error) {
					let err = '';
					if (!rawResponse.url.includes(HOSTNAME)) {
						err = { message: Labels.error.networkError };
					}
					else {
						err = { message: Labels.error.default };
					}
					throw err;
				}
				return jsonResponse;
			})
			.then((response) => {
				debug(`RESPONSE #${requestNum}`, HOSTNAME + endpoint, response);
				return resolve(response);
			})
			// when response status code is not 200
			.catch(async (error, code) => {
				// API got back to us, clear the timeout
				clearTimeout(apiTimedOut);
				debug(`RESPONSE #${requestNum}`, HOSTNAME + endpoint, { error, code });

				if (error === 401) {
					return reject(error);
				}

				if (!error.message) {
					return reject(Labels.error.default);
				}

				return reject(error);
			});
	});
}

/* Create the API Export ==================================================================== */
/**
 * Build services from Endpoints
 * - So we can call AppAPI.recipes.get() for example
 */
const AppAPI = {
	// getToken: Token.getToken,
	// tokenIsValid: Token.tokenIsValid
};

APIConfig.endpoints.forEach((endpoint) => {
    AppAPI[endpoint.key] = (params, body) =>
        fetcher(endpoint.method, endpoint.url, params, body);
});

/* Export ==================================================================== */
export default AppAPI;
