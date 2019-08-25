import {all, call} from 'redux-saga/effects'
import user from './user';
import post from './post';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:2323/api';

export default function* rootSaga() {
    yield all([
        call(user),
        call(post),
    ])
}