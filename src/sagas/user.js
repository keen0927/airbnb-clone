import { take, all } from 'redux-saga/effects';
import { LOG_IN } from '../reducers/user';

function* watchLogin() {
    yield take(LOG_IN);
    console.log('LOGIN_SUCCESS');
    // put {

    // }
}

export default function* userSaga() {
    yield all[
        watchLogin()
    ]
}