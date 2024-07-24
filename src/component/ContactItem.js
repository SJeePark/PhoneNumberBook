import React from 'react';
import { Col, Row } from "react-bootstrap";

const ContactItem = () => {
  return (
    <div>
    <Row>
      <Col lg={1}>
        <img width = {50} className='profile'
        src='https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='></img>
      </Col>
      <Col lg={11}>
        <div>박상지</div>
        <div>0100000000</div>
      </Col>
      </Row>
    </div>
  )
}

export default ContactItem
