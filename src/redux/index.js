/**
 * Combine All Reducers
 *
 * */

import { combineReducers } from 'redux';
import { createFilter } from 'redux-persist-transform-filter';

// Our custom reducers
// We need to import each one here and add them to the combiner at the bottom
import core from '@redux/core/reducer';

// Combine all
const appReducer = combineReducers({
	core
});

// Setup root reducer
const RootReducer = (state, action) => {
	const newState = (action.type === 'RESET') ? undefined : state;
	return appReducer(newState, action);
};


// store only a subset of state of reducers
export const SaveSubsetFilter = [
	createFilter('core', ['diaries', 'pin'])
];

export default RootReducer;
