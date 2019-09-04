import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { LOAD_POST_REQUEST } from '../reducers/post';

// 검색엔진이 잘 가져갈 수 있도록 만드는 법 
// 1. meta tag 안에 html 속성을 기입하는 것
// 2. 스카마.org 을 적용하여 html 속성들을 넣어주는 것 
const Post = ({ id }) => {
  const { singlePost } = useSelector(state => state.post);
  return (
    <>
      <Helmet
        title={`${singlePost.User.nickname}님의 글`}
        description={singlePost.content}
        meta={[{
          name: 'description', content: singlePost.content,
        }, {
          property: 'og:title', content: `${singlePost.User.nickname}님의 게시글`,
        }, {
          property: 'og:description', content: singlePost.content,
        }, {
          property: 'og:image', content: singlePost.Images[0] && `http://localhost:2323/${singlePost.Images[0].src}`,
        }, {
          property: 'og:url', content: `http://localhost:3060/post/${id}`,
        }]}
      />
      <div itemScope="content">{singlePost.content}</div>
      <div itemScope="author">{singlePost.User.nickname}</div>
      <div>
        {singlePost.Images[0] && <img src={`http://localhost:2323/${singlePost.Images[0].src}`} />}
      </div>  
    </>
  );
};

Post.getInitialProps = async (context) => {
  context.store.dispatch({
    type: LOAD_POST_REQUEST,
    data: context.query.id,
  });
  return { id: parseInt(context.query.id, 10) };
};

Post.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Post;