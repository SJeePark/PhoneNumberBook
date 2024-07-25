import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const SerachBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };
  return (
    <Row className='search-box'>
        <Col lg={10}>
        <Form.Control
        className='container'
        onChange={(event) => setKeyword(event.target.value)}
        type="text" 
        placeholder="이름을 입력해주세요" />
        </Col>
        <Col>
        <Button className='button' lg={1}><img src='https://cdn-icons-png.flaticon.com/512/1786/1786987.png' width={'15px'} ></img></Button>
        </Col>
    </Row>
  )
}

export default SerachBox


// 1. 검색어 입력받기
// 2. list 이름과 대조하기
// 3. 전화번호부에 출력하기