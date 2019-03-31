/**
 * Core Actions
 *
 * */
import { Util, AppAPI } from '@lib/';
import {
    addNewDiary,
    updateDiary,
    addPin
} from '@redux/core/actionCreators';


/**
  * add new diary
*/
export function addNewDiaryAction(data) {
    return dispatch => new Promise(async (resolve, reject) => {
        dispatch(addNewDiary(data));
        return resolve();
    });
}

/**
  * update diary
*/
export function updateDiaryAction(data) {
    return dispatch => new Promise(async (resolve, reject) => {
        dispatch(updateDiary(data));
        return resolve();
    });
}

/**
  * add pin (login)
*/
export function addPinAction(pin) {
    return dispatch => new Promise(async (resolve, reject) => {
        dispatch(addPin(pin));
        return resolve();
    });
}