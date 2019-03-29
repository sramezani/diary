/**
 * Core Action Creators
 *
 * */
import { coreTypes } from '@redux/constants/actionCreatorTypes';
import makeActionCreator from '@redux/constants/makeActionCreator';

// Loadings
export const toggleLoading = makeActionCreator(coreTypes.LOADING_TOGGLE);
export const hideLoading = makeActionCreator(coreTypes.LOADING_HIDE);
