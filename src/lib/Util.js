/* *
 * Global Util Functions

 * */
import { AsyncStorage, Dimensions } from 'react-native';
import { ErrorMessages, AppConfig } from '@constants/';
const { width } = Dimensions.get('window');

const Util = {
	/**
	* Test if Obj is empty
	*/
	objIsEmpty: (obj) => {
		if (typeof obj === 'object' && !(obj instanceof Array)) {
			if (Object.keys(obj).length === 0) return true;
		}
		return false;
	},

	/**
	* Convert Obj to Arr
	*/
	objToArr: obj => Object.keys(obj).map(k => obj[k]),

	/**
	* Limit characters, (placing a ... at the end is optional)
	*/
	limitChars: (str, limit = 15, addDots = true) => {
		if (!str) return '';

		let newStr = str;
		if (str.length > limit) {

			// trim the string
			newStr = str.substr(0, limit);

			// re-trim if we are in the middle of a word
			newStr = newStr.substr(0, Math.min(newStr.length, newStr.lastIndexOf(' ')));

			// add dot at the end of string
			newStr = addDots ? `${newStr} ...` : newStr;
		}
		return newStr;
	},

	validateEmail: email => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/g.test(email),

	handleError: (err) => {
		let error = '';

		if (typeof err === 'string') {
			error = err;
		}
		else if (err && err.message) {
			error = err.message;
		}
		else if (err && err.error && err.error.message) {
			error = err.error.message;
		}
		else if (err && err.data && err.data.message) {
			error = err.data.message;
		}

		return error;
	},

	randomNumber: (min, max) => {
    	return Math.floor(Math.random()*(max-min+1)+min);
	},

	sortByProp: (arr, prop) => {
		arr.sort((a, b) => a[prop] - b[prop]);
	},

	saveToStorage: async (key, value) => {
		try {
			await AsyncStorage.setItem(key, value);
		}
		catch (error) {
			throw error;
		}
	},

	removeFromStorage: async (key) => {
		await AsyncStorage.removeItem(key);
	},

	getFromStorage: async (key) => {
		const value = await AsyncStorage.getItem(key);

		return value;
	},

	getQueryString: (url, parameter) => {
		const myParameter = parameter.replace(/[\[\]]/g, '\\$&');
		const regex = new RegExp(`[?&]${myParameter}(=([^&#]*)|&|#|$)`);
		const results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ' '));
	},

	scale: (size, factor = 0.5) => size + ( (width / 350 * size) - size ) * factor,
};

/* Export ================================ */
export default Util;
