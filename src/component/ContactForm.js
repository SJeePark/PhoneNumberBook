import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState(0)
  const dispatch = useDispatch();

  const addContact = (event)=>{
    event.preventDefault();
    dispatch({type: 'ADD_CONTACT', payload:{name, phoneNumber}})
  }

  return (
    <div className='form-container'>
      <Form onSubmit={addContact}>
      <Form.Group className="mb-3" controlId="fromName">
        <Form.Label>이름</Form.Label>
        <Form.Control type="text" 
        className='container'
        placeholder="이름을 입력해주세요" 
        onChange={(event)=>setName(event.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="contact">
        <Form.Label>전화번호</Form.Label>
        <Form.Control  
        className='container'
        type="number" 
        placeholder="번호를 입력해주세요" 
        onChange={(event)=>setPhoneNumber(event.target.value)}/>
      </Form.Group>
      <Button className='button' type="submit" disabled={phoneNumber==="" || name===""?true:false}>
        +
      </Button>
    </Form>
    </div>
  )
}

export default ContactForm
