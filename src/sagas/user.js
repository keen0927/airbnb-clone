import { take, all, takeEvery, fork } from 'redux-saga/effects';
import { LOG_IN_REQUEST } from '../reducers/user';



function* login() {
    console.log('LOG_IN_REQUEST1');
    yield take(LOG_IN_REQUEST);
    console.log('LOG_IN_REQUEST2');
    // put {

    // }
}

function* watchLogin() {
    yield takeEvery(LOG_IN_REQUEST, login);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin)
    ])
}