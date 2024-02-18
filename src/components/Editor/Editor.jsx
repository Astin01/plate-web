import React from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import styles from '../../css/Editor/Editor.module.css';
import { Button } from 'react-bootstrap';

const Editor = ({ data, onSubmit }) => {
  return (
    <Form onSubmit={(e) => onSubmit(e)}>
      <InputGroup size="lg">
        <Form.Control
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
          placeholder="제목"
          name="title"
          defaultValue={data.title}
          required
        />
      </InputGroup>
      <InputGroup className={styles.contentArea}>
        <Form.Control
          as="textarea"
          aria-label="With textarea"
          placeholder="내용을 입력해주세요"
          name="content"
          defaultValue={data.content}
          required
        />
      </InputGroup>
      <div className={styles.buttonWrap}>
        <Button variant="primary" type="submit">
          작성
        </Button>
      </div>
    </Form>
  );
};

export default Editor;
