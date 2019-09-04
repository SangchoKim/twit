import {all, fork, takeLatest, call, put, delay} from 'redux-saga/effects'
import {
    EDIT_NICKNAME_FAILURE, 
    EDIT_NICKNAME_REQUEST,
    EDIT_NICKNAME_SUCCESS,
    LOAD_USER_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    UNFOLLOW_USER_FAILURE,
    UNFOLLOW_USER_REQUEST,
    UNFOLLOW_USER_SUCCESS,
    FOLLOW_USER_FAILURE,
    FOLLOW_USER_REQUEST,
    FOLLOW_USER_SUCCESS,
    LOAD_FOLLOWERS_FAILURE,
    LOAD_FOLLOWERS_REQUEST,
    LOAD_FOLLOWERS_SUCCESS,
    LOAD_FOLLOWINGS_FAILURE, 
    LOAD_FOLLOWINGS_REQUEST,
    LOAD_FOLLOWINGS_SUCCESS,
    REMOVE_FOLLOWER_FAILURE, 
    REMOVE_FOLLOWER_REQUEST, 
    REMOVE_FOLLOWER_SUCCESS,
  } from '../reducers/user';
  import axios from 'axios';

function loginAPI(loginData){
    // 서버에 요청을 보내는 부분 
    return axios.post('/user/login',loginData,{
        withCredentials: true, // 쿠기를 다른 도메인으로 보낼때 ->도메인이 다르기떄문에 설정 필요 (front)
    });
}

function* login(action){
    try {
        const result = yield call(loginAPI, action.data);
        console.log(result);
        yield put({ // put은 dispatch 동일
            type: LOG_IN_SUCCESS,
            data: result.data,
        });
    } catch (error) { // loginAPI 실패
        console.log(error);
        yield put({
            type: LOG_IN_FAILURE,
            reason: error.response.data && error.response.data,
        });
    }
}


function* watchLogin(){
    yield takeLatest(LOG_IN_REQUEST, login)
}

function signUpAPI(signUPdata){
    // 서버에 요청을 보내는 부분 
    return axios.post('/user/',signUPdata);
}

function* signUp(action){
    try {
        yield call(signUpAPI, action.data);
        yield put({ // put은 dispatch 동일
            type: SIGN_UP_SUCCESS
        });
    } catch (error) { // loginAPI 실패
        console.log(error);
        yield put({
            type: SIGN_UP_FAILURE
        });
    }
}

function* watchSignUp(){
    yield takeLatest(SIGN_UP_REQUEST, signUp)
}

function logOutAPI() {
    // 서버에 요청을 보내는 부분
    return axios.post('/user/logout', {}, {
      withCredentials: true,
    });
  }
  
  function* logOut() {
    try {
      // yield call(logOutAPI);
      yield call(logOutAPI);
      yield put({ // put은 dispatch 동일
        type: LOG_OUT_SUCCESS,
      });
    } catch (e) { // loginAPI 실패
      console.error(e);
      yield put({
        type: LOG_OUT_FAILURE,
        error: e,
      });
    }
  }
  
  function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
  }
  
  function loadUserAPI(userId) {
    // 서버에 요청을 보내는 부분 
    return axios.get(userId ? `/user/${userId}` : '/user/', {
      withCredentials: true, // 클라이언트에서 요청 보낼 때는 브라우저가 쿠키를 같이 동봉해줌
    }); // 서버사이드렌더링일 때는, 브라우저가 없어요...
  }
  
  function* loadUser(action) {
    try {
      // yield call(loadUserAPI);
      const result = yield call(loadUserAPI, action.data);
      yield put({ // put은 dispatch 동일
        type: LOAD_USER_SUCCESS,
        data: result.data,
        me: !action.data,
      });
    } catch (e) { // loginAPI 실패
      console.error(e);
      yield put({
        type: LOAD_USER_FAILURE,
        error: e,
      });
    }
  }
  
  function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
  }

  function followAPI(userId) {
    // 서버에 요청을 보내는 부분
    return axios.post(`/user/${userId}/follow`, {}, {
      withCredentials: true,
    });
  }
  
  function* follow(action) {
    try {
      // yield call(followAPI);
      const result = yield call(followAPI, action.data);
      yield put({ // put은 dispatch 동일
        type: FOLLOW_USER_SUCCESS,
        data: result.data,
      });
    } catch (e) { // loginAPI 실패
      console.error(e);
      yield put({
        type: FOLLOW_USER_FAILURE,
        error: e,
      });
    }
  }
  
  function* watchFollow() {
    yield takeLatest(FOLLOW_USER_REQUEST, follow);
  }
  
  function unfollowAPI(userId) {
    // 서버에 요청을 보내는 부분
    return axios.delete(`/user/${userId}/follow`, {
      withCredentials: true,
    });
  }
  
  function* unfollow(action) {
    try {
      // yield call(unfollowAPI);
      const result = yield call(unfollowAPI, action.data);
      yield put({ // put은 dispatch 동일
        type: UNFOLLOW_USER_SUCCESS,
        data: result.data,
      });
    } catch (e) { // loginAPI 실패
      console.error(e);
      yield put({
        type: UNFOLLOW_USER_FAILURE,
        error: e,
      });
    }
  }
  
  function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_USER_REQUEST, unfollow);
  }
  function loadFollowersAPI(userId, offset = 0, limit = 3) {
    // 서버에 요청을 보내는 부분
    return axios.get(`/user/${userId||0}/followers?offset=${offset}&limit=${limit}`, {
      withCredentials: true,
    });
  }
  
  function* loadFollowers(action) {
    try {
      // yield call(loadFollowersAPI);
      const result = yield call(loadFollowersAPI, action.data, action.offset);
      yield put({ // put은 dispatch 동일
        type: LOAD_FOLLOWERS_SUCCESS,
        data: result.data,
      });
    } catch (e) { // loginAPI 실패
      console.error(e);
      yield put({
        type: LOAD_FOLLOWERS_FAILURE,
        error: e,
      });
    }
  }
  
  function* watchLoadFollowers() {
    yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
  }
  
  function loadFollowingsAPI(userId, offset = 0, limit = 3) {
    // 서버에 요청을 보내는 부분
    console.log("offset",offset);
    return axios.get(`/user/${userId||0}/followings?offset=${offset}&limit=${limit}`, {
      withCredentials: true,
    });
  }
  
  function* loadFollowings(action) {
    try {
      // yield call(loadFollowersAPI);
      const result = yield call(loadFollowingsAPI, action.data, action.offset);
      yield put({ // put은 dispatch 동일
        type: LOAD_FOLLOWINGS_SUCCESS,
        data: result.data,
      });
    } catch (e) { // loginAPI 실패
      console.error(e);
      yield put({
        type: LOAD_FOLLOWINGS_FAILURE,
        error: e,
      });
    }
  }
  
  function* watchLoadFollowings() {
    yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
  }
  
  function removeFollowerAPI(userId) {
    // 서버에 요청을 보내는 부분
    return axios.delete(`/user/${userId}/follower`, {
      withCredentials: true,
    });
  }
  
  function* removeFollower(action) {
    try {
      // yield call(loadFollowersAPI);
      const result = yield call(removeFollowerAPI, action.data);
      yield put({ // put은 dispatch 동일
        type: REMOVE_FOLLOWER_SUCCESS,
        data: result.data,
      });
    } catch (e) { // loginAPI 실패
      console.error(e);
      yield put({
        type: REMOVE_FOLLOWER_FAILURE,
        error: e,
      });
    }
  }
  
  function* watchRemoveFollower() {
    yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower);
  }

  function editNicknameAPI(nickname) {
    // 서버에 요청을 보내는 부분
    return axios.patch('/user/nickname', { nickname }, {
      withCredentials: true,
    });
  }
  
  function* editNickname(action) {
    try {
      // yield call(loadFollowersAPI);
      const result = yield call(editNicknameAPI, action.data);
      yield put({ // put은 dispatch 동일
        type: EDIT_NICKNAME_SUCCESS,
        data: result.data,
      });
    } catch (e) { // loginAPI 실패
      console.error(e);
      yield put({
        type: EDIT_NICKNAME_FAILURE,
        error: e,
      });
    }
  }
  
  function* watchEditNickname() {
    yield takeLatest(EDIT_NICKNAME_REQUEST, editNickname);
  }

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogOut),
        fork(watchLoadUser),
        fork(watchSignUp),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLoadFollowers),
        fork(watchLoadFollowings),
        fork(watchRemoveFollower),
        fork(watchEditNickname),
    ]);
}