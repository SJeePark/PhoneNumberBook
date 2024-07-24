import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'

const SerachBox = () => {
  return (
    <Row>
        <Col lg={10}>
        <Form.Control type="text" placeholder="이름을 입력해주세요" />
        </Col>
        <Col>
        <Button lg={2}>찾기</Button>
        </Col>
    </Row>
  )
}

export default SerachBox
