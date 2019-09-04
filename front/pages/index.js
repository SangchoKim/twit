import React, { useEffect,useCallback,useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PostForm from '../containers/PostForm';
import PostCard from '../containers/PostCard';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
  const { me } = useSelector(state => state.user);
  const { mainPosts, hasMorePost } = useSelector(state => state.post);
  const dispatch = useDispatch();
  const countRef = useRef([]);

  const onScroll = useCallback(() => {
    // scrollY = 스크롤 내린 거리 
    // clientHeight = 화면 높이
    // scrollHeight: 전체 화면 길이
    // 전체 화면 까지 스크롤이 도착하기 전 300 정도가 남았을 때 불러오기 
    if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
      if (hasMorePost) {
        const lastId = mainPosts[mainPosts.length - 1].id; // 마지막 게시글의 id 추출
        if (!countRef.current.includes(lastId)) {
          dispatch({
            type: LOAD_MAIN_POSTS_REQUEST,
            lastId,
          });
          countRef.current.push(lastId);
        }
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
      {me && <PostForm />}
      {mainPosts.map((c) => {
        return (
          <PostCard key={c.id} post={c} />
        );
      })}
    </div>
  );
};
// getInitialProps 서버사이드 렌더링의 핵심 -. 서버&&프론트 둘다 실행
// 서버쪽에서 실행은 언제? 처음으로 페이지를 불러올때 
// 프론트쪽에서는 언제 실행? 넥스트 라우터로 페이지를 넘나들때 
Home.getInitialProps = async (context) => {
  console.log(Object.keys(context));
// context 안에 리덕스의 store가 들어 있음 -> store.dispatch 로 사용 가능 
// -> store.getState 로 사용 가능 
context.store.dispatch({
  type: LOAD_MAIN_POSTS_REQUEST,
});
};

export default Home;