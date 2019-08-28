import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper'; // next와 리덕스 연결
import withReduxSaga from 'next-redux-saga'; // next와 리덕스 사가 연결
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

import AppLayout from '../components/AppLayout';
import reducer from '../reducers';
import rootSaga from '../sagas';
import { LOAD_USER_REQUEST } from '../reducers/user';

const NodeBird = ({ Component, store , pageProps }) => {  // 3번으로 실행
  return (
    <Provider store={store}>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
  <     link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <AppLayout>
        {/* 각각의 componenet 에 pageProps 넣어줌  */}
        <Component {...pageProps}/> 
      </AppLayout>
    </Provider>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
  store: PropTypes.object.isRequired,
  pageProps: PropTypes.object.isRequired,
};

// getInitialProps 서버사이드 렌더링의 핵심 -. 서버&&프론트 둘다 실행
// 서버쪽에서 실행은 언제? 처음으로 페이지를 불러올때 
// 프론트쪽에서는 언제 실행? 넥스트 라우터로 페이지를 넘나들때
NodeBird.getInitialProps = async (context) => { // next 에서 내려주는 context // 1번으로 실행
  console.log(context);
  const { ctx, Component } = context;  // context 안에는 Component 와 ctx 가 들어있음
  let pageProps = {};
  const state = ctx.store.getState(); // ctx 안에 리덕스의 store가 들어 있음 -> store.getState 로 사용 가능 
  const cookie = ctx.isServer ? ctx.req.headers.cookie : ''; // ctx 안에 리덕스의 req도  들어 있어 cookie 빼올 수 있음 
  axios.defaults.headers.Cookie = '';
  if (ctx.isServer && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  if (!state.user.me) {
    ctx.store.dispatch({
      type: LOAD_USER_REQUEST, // SSR AppLayout 유저 정보 가져오기
    });
  }

  if (Component.getInitialProps) { // Component안에 getInitialProps 있는 경우
    pageProps = await Component.getInitialProps(ctx); // 각 componenet 안에서 리턴 받은 값을 pageProps에 넣음
  }
  return { pageProps }; // nodeBird props로 넘김 
};

const configureStore = (initialState, options) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : compose(
      applyMiddleware(...middlewares),
      !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
    );
  const store = createStore(reducer, initialState, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga); // 추가 필요 SSR 할때 
  return store;
};

export default withRedux(configureStore)(withReduxSaga(NodeBird));