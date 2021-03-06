import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Card } from 'antd';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
import { LOAD_USER_REQUEST } from '../reducers/user';
import PostCard from '../containers/PostCard';

const User = () => { // _app.js에서  props로 내려온 값은 id로 받음 // 4번으로 실행
  const dispatch = useDispatch();
  const { mainPosts } = useSelector(state => state.post);
  const { userInfo } = useSelector(state => state.user);
 
  
  return (
    <div>
      {userInfo
        ? (
          <Card
            actions={[
              <div key="twit">
                짹짹
                <br />
                {userInfo.Posts}
              </div>,
              <div key="following">
                팔로잉
                <br />
                {userInfo.Followings}
              </div>,
              <div key="follower">
                팔로워
                <br />
                {userInfo.Followers}
              </div>,
            ]}
          >
            <Card.Meta
              avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
              title={userInfo.nickname}
            />
          </Card>
        )
        : null}
      {mainPosts.map(c => (
        <PostCard key={c.id} post={c} />
      ))}
    </div>
  );
};

User.prototype={
    id: PropTypes.number.isRequired,
}

// getInitialProps 서버사이드 렌더링의 핵심 -. 서버&&프론트 둘다 실행
// 서버쪽에서 실행은 언제? 처음으로 페이지를 불러올때
// 프론트쪽에서는 언제 실행? 넥스트 라우터로 페이지를 넘나들때 
User.getInitialProps = async (context) => { // 파라미터로 ctx가 들어옴  // 2번으로 실행
    const id = parseInt(context.query.id, 10);  
    console.log('User getInitalProps', id); // ctx 안에 있는 tag 뽑아냄
    context.store.dispatch({
      type: LOAD_USER_REQUEST,
      data: id,
    });
    context.store.dispatch({
      type: LOAD_USER_POSTS_REQUEST,
      data: id,
    });
    return{id} // 리턴하면 _app.js pageProps에 담김
};

export default User;