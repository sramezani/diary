/**
 * Core Reducer
 *
 * */
import { coreTypes } from '@redux/constants/actionCreatorTypes';
import createReducer from '@redux/constants/createReducer';
import { REHYDRATE } from 'redux-persist/lib/constants';

// Set initial state
export const initialState = {
    loading: false
};

const coreReducer = createReducer(state = initialState, {

	[coreTypes.LOADING_TOGGLE](state) {
		return { ...state, loading: !state.loading };
    },

	[coreTypes.LOADING_HIDE](state) {
		return { ...state, loading: false };
    },



    [REHYDRATE](state, action) {
        if (!action.payload) return state;
        if (!action.payload.core) return state;

        const incoming = action.payload.core;
        return {
            ...state,
            ...incoming
        };
    }
});

export default coreReducer;
