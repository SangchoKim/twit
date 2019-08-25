import React, { useCallback, useState, useEffect,useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../reducers/post';

const PostForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);
  const imageInput  = useRef();

  useEffect(() => {
    if (postAdded) {
      setText('');
    }
  }, [postAdded]);


  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    if(!text || !text.trim()){
      return alert('게시글을 작성하세요');
    }

    const formData = new FormData();
    imagePaths.forEach((i) => {
      formData.append('image', i);
    });
    formData.append('content', text);

    dispatch({
      type: ADD_POST_REQUEST,
      data: formData,
    });
  }, [text,imagePaths]);

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onChangeImages = useCallback((e) => {  // 이미지 파일이 담겨있음
    console.log(e.target.files);
    const imageFormData = new FormData();
    [].forEach.call(e.target.files, (f) => {
      imageFormData.append('image', f);  // AJAX 기반인 SPA를 유지하기 위해서 기존의 방법과는 다르게 모든 설정이 필요 
    });
    dispatch({
      type: UPLOAD_IMAGES_REQUEST,
      data: imageFormData,
    });
  }, []);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click(); // 이미지 업로드 버튼을 클릭했을 때 input ref imageInput 버튼을 눌른 효과가 남
  }, [imageInput.current]);

  const onRemoveImage = useCallback(index => () => {  // onRemoveImage(i) 경우 () => () => {} // isAddingPost경우 () => {}
    dispatch({
      type: REMOVE_IMAGE,
      index,
    });
  }, []);

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onSubmit={onSubmitForm}>
      <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" value={text} onChange={onChangeText} />
      <div>
        <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingPost}>짹짹</Button>
      </div>
      <div>
        {imagePaths.map((v,i) => (
          <div key={v} style={{ display: 'inline-block' }}>
            <img src={`http://localhost:2323/${v}`} style={{ width: '200px' }} alt={v} />
            <div>
              <Button onClick={onRemoveImage(i)}>제거</Button>
            </div>
          </div>
        ))}
      </div>
    </Form>
  );
};

export default PostForm;