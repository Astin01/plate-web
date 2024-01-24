import { Button, Container, Form, Row } from 'react-bootstrap';

import onLogin from '../utils/onLogin';
import checkLogin from '../utils/checkLogin';

export default function Login({ setIsLogin }) {
  return (
    <Container>
      <Form onSubmit={onLogin}>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>아이디</Form.Label>
            <Form.Control name="id" type="text" placeholder="Enter email" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control name="pw" type="password" placeholder="Password" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="기억하기" />
          </Form.Group>
        </Row>
        <Row>
          <Button
            variant="primary"
            type="submit"
            onClick={() => {
              setInterval(() => {
                checkLogin(setIsLogin);
              }, 1000);
            }}
          >
            로그인
          </Button>
        </Row>
      </Form>
    </Container>
  );
}
