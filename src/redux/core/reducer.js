/**
 * Core Reducer
 *
 * */
import { coreTypes } from '@redux/constants/actionCreatorTypes';
import createReducer from '@redux/constants/createReducer';
import { REHYDRATE } from 'redux-persist/lib/constants';

// Set initial state
export const initialState = {
    loading: false,
    diaries: []

};

const coreReducer = createReducer(state = initialState, {

	[coreTypes.LOADING_TOGGLE](state) {
		return { ...state, loading: !state.loading };
    },

	[coreTypes.LOADING_HIDE](state) {
		return { ...state, loading: false };
    },

    [coreTypes.ADD_NEW_DIARY](state, action) {
		if (!action.diary) return state;
		return {
			...state,
			diaries: [
				...state.diaries,
				{
					...action.diary,
					id: state.diaries.length + 1
				}
			]
		};
    },

    [coreTypes.UPDATE_DIARY](state, action) {
        if (!action.diary) return state;
        const newDiaries = JSON.parse(JSON.stringify(state.diaries));
        const index = state.diaries.map((itm) => { return itm.id; }).indexOf(action.diary.id);
        if (index > -1) {
            newDiaries[index].date = action.diary.date;
            newDiaries[index].title = action.diary.title;
            newDiaries[index].note = action.diary.note;
        }
        console.log(newDiaries);
		return {
			...state,
			diaries: [
				...newDiaries
			]
        };
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
