import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import ContactForm from './component/ContactForm';
import ContactList from './component/ContactList';

// 1. 왼쪽: 연락처 등록 폼  오른쪽: 연락처 리스트와 serach 창
// 2. 리스트에 유저 이름과 번호를 추가
// 3. 리스트에 아이템이 몇개 있는지 보인다. 
// 4. 사용자가 유저를 이름 검색으로 찾을 수 있다. 


function App() {
  return (
    <div>
    <h1>Phone Book</h1>
    <div className='content'>
      <Container>
        <Row>
          <Col lg={4}>
          <ContactForm />
          </Col>
          <Col lg={8}>
          <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
}

export default App;
 


// 이름 가나다순으로 정렬되면 좋을 듯
// 빈칸이면 추가 불가
// 숫자 8자리 이내