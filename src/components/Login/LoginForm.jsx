import { Button, Container, Form, Row } from 'react-bootstrap';

import styles from '../../css/Login/LoginForm.module.css';
import { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContextProvider';

export default function LoginForm() {
  const { login } = useContext(LoginContext);

  const onLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const userId = form.id.value;
    const password = form.pw.value;

    login(userId, password);
  };

  return (
    <Container className={styles.container}>
      <Form onSubmit={(e) => onLogin(e)}>
        <Row>
          <Form.Group className="mb-3" controlId="id">
            <Form.Label>아이디</Form.Label>
            <Form.Control name="id" type="text" placeholder="id" required />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              name="pw"
              type="password"
              placeholder="password"
              required
            />
          </Form.Group>
        </Row>
        <Row>
          <Button variant="primary" type="submit">
            로그인
          </Button>
        </Row>
      </Form>
    </Container>
  );
}
