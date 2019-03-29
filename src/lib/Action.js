import { StackActions, NavigationActions } from 'react-navigation';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
	_navigator = navigatorRef;
}

function navigate(routeName, params) {
	const action = NavigationActions.navigate({
		routeName,
		params
	});
	_navigator.dispatch(action);
}

function navigateReset(routeName, params) {
	const action = StackActions.reset({
		index: 0,
		// key: null,
		actions: [
			NavigationActions.navigate({
				routeName,
				params
			})
		]
	});
	_navigator.dispatch(action);
}

function navigatePush(routeName, params) {
	const action = StackActions.push({
		routeName,
		params
	});
	_navigator.dispatch(action);
}

function back() {
	_navigator.dispatch(NavigationActions.back());
}

function backTo(routeName) {
	_navigator.dispatch(NavigationActions.back({
		key: routeName
	}));
}

// add other navigation functions that you need and export them

export default {
  navigate,
  navigateReset,
  navigatePush,
  back,
  backTo,
  setTopLevelNavigator
};
