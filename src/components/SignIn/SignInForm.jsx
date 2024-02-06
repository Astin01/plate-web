import { Button, Container, Form, Row } from 'react-bootstrap';
import styles from '../../css/SignIn/SignInForm.module.css';

export default function SignInForm({ signIn }) {
  const onSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const userId = form.userId.value;
    const userPassword = form.userPassword.value;
    const name = form.name.value;
    const nickname = form.nickname.value;
    const email = form.email.value;

    signIn({ userId, userPassword, name, nickname, email });
  };
  return (
    <Container className={styles.container}>
      <Form
        onSubmit={(e) => {
          onSignIn(e);
        }}
      >
        <Row>
          <Form.Group className="mb-3" controlId="userId">
            <Form.Label>아이디</Form.Label>
            <Form.Control type="text" placeholder="id" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="userPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="password" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>이름</Form.Label>
            <Form.Control type="text" placeholder="username" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="nickname">
            <Form.Label>닉네임</Form.Label>
            <Form.Control type="text" placeholder="nickname" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>이메일</Form.Label>
            <Form.Control type="email" placeholder="email" />
          </Form.Group>
        </Row>
        <Row>
          <Button variant="primary" type="submit">
            회원가입
          </Button>
        </Row>
      </Form>
    </Container>
  );
}
