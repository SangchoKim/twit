import React, { useEffect,useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_HASHTAG_POSTS_REQUEST } from '../reducers/post';
import PostCard from '../containers/PostCard';

const Hashtag = ({tag}) => {

  const dispatch = useDispatch();
  const { mainPosts, hasMorePost } = useSelector(state => state.post);

  const onScroll = useCallback(() => {
    // scrollY = 스크롤 내린 거리 
    // clientHeight = 화면 높이
    // scrollHeight: 전체 화면 길이
    // 전체 화면 까지 스크롤이 도착하기 전 300 정도가 남았을 때 불러오기 
    if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
      if (hasMorePost) {
        const lastId = mainPosts[mainPosts.length - 1].id && mainPosts[mainPosts.length - 1].id; // 마지막 게시글의 id 추출
        // if (!countRef.current.includes(lastId)) {
          dispatch({
            type: LOAD_HASHTAG_POSTS_REQUEST,
            lastId,
            data:tag,
          });
          // countRef.current.push(lastId);
        // }
      }
    }
  }, [hasMorePost, mainPosts.length]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts.length]);

  return (
    <div>
      {mainPosts.map(c => (
        <PostCard key={c.id} post={c} />
      ))}
    </div>
  );
};

Hashtag.getInitialProps = async (context) => { // 파라미터로 ctx가 들어옴 // 2번으로 실행
    const tag = context.query.tag;  
    console.log('hashtag getInitalProps', tag); // ctx 안에 있는 tag 뽑아냄 
    context.store.dispatch({
      type: LOAD_HASHTAG_POSTS_REQUEST,
      data: tag,
    });
    return{tag} // 리턴하면 _app.js pageProps에 담김
}
export default Hashtag;