/**
 * Core Action Creators
 *
 * */
import { coreTypes } from '@redux/constants/actionCreatorTypes';
import makeActionCreator from '@redux/constants/makeActionCreator';

// Loadings
export const toggleLoading = makeActionCreator(coreTypes.LOADING_TOGGLE);
export const hideLoading = makeActionCreator(coreTypes.LOADING_HIDE);
export const addNewDiary = makeActionCreator(coreTypes.ADD_NEW_DIARY, 'diary');
export const updateDiary = makeActionCreator(coreTypes.UPDATE_DIARY, 'diary');