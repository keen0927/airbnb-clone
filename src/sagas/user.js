import { take, all, takeEvery, fork, delay, put } from 'redux-saga/effects';
import { LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';



function* login() {
    console.log('1');
    try {
        console.log('2');
        yield delay(2000);
        console.log('3');
        yield put({
            type: 'LOG_IN_SUCCESS'
        });
        console.log('4');
        
    } catch (error) {
        // console.log('3');
        // put(LOG_IN_FAILURE);
    }
}

function* watchLogin() {
    yield takeEvery(LOG_IN_REQUEST, login);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin)
    ])
}