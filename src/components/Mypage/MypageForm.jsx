import React from 'react';
import { Container, Form, Row, Button } from 'react-bootstrap';
import styles from '../../css/Mypage/MypageForm.module.css';
import { useNavigate } from 'react-router-dom';

const MypageForm = ({ userInfo, updateUser, deleteUser }) => {
  const navigate = useNavigate();
  const onUpdate = (e) => {
    e.preventDefault();

    const form = {
      userId: e.target.userId.value,
      userPassword: e.target.userPassword.value,
      name: e.target.name.value,
      nickname: e.target.nickname.value,
      email: e.target.email.value,
    };

    updateUser(form);
  };
  return (
    <Container className={styles.container}>
      <Form
        onSubmit={(e) => {
          onUpdate(e);
        }}
      >
        <Row>
          <Form.Group className="mb-3" controlId="userId">
            <Form.Label>아이디</Form.Label>
            <Form.Control
              type="text"
              placeholder="id"
              required
              readOnly
              defaultValue={userInfo?.userId}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="userPassword">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control type="password" placeholder="password" required />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>이름</Form.Label>
            <Form.Control
              type="text"
              placeholder="username"
              required
              defaultValue={userInfo?.name}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="nickname">
            <Form.Label>닉네임</Form.Label>
            <Form.Control
              type="text"
              placeholder="nickname"
              required
              defaultValue={userInfo?.nickname}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>이메일</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              required
              defaultValue={userInfo?.email}
            />
          </Form.Group>
        </Row>
        <Row className={styles.buttonWrap}>
          <Button variant="primary" type="submit">
            수정하기
          </Button>
          <Button
            variant="danger"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              deleteUser(userInfo.userId);
            }}
          >
            회원탈퇴
          </Button>
        </Row>
        <Row>
          <Button 
          variant="primary"             
          type="button"
          onClick={(e) => {
              e.preventDefault();
              navigate("/rating");}}>
            선호도 수정
          </Button>
        </Row>
      </Form>
    </Container>
  );
};

export default MypageForm;
