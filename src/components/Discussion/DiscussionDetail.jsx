import { Button, Form, InputGroup } from 'react-bootstrap';
import styles from '../../css/Discussion/DiscussionDetail.module.css';
import { useNavigate } from 'react-router-dom';
import * as discussionApi from '../../apis/discussion';
import { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../contexts/LoginContextProvider';
import * as Swal from '../../apis/alert';
import * as commentApi from '../../apis/comment';

const DiscussionDetail = ({ data }) => {
  let [commentData, setCommentData] = useState([]);
  const navigate = useNavigate();
  const { userInfo } = useContext(LoginContext);

  const notUser = () => {
    if (userInfo.userId !== data.userId.userId) {
      Swal.alert(
        '유효하지 않은 접근입니다',
        '작성자만 수정, 삭제가 가능합니다',
        'warning',
        () => {
          navigate('/discussion');
        }
      );
      return true;
    }
  };

  const editDiscussion = () => {
    if (notUser()) {
      return;
    }
    navigate(`/discussion/edit/${data.id}`);
  };
  const deleteDiscussion = () => {
    if (notUser()) {
      return;
    }
    discussionApi.deleteDiscussion(data.id);
    navigate('/discussion');
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (userInfo.userId === undefined) {
      Swal.alert(
        '로그인이 필요합니다',
        '로그인 페이지로 이동합니다',
        'warning',
        () => {
          navigate('/login');
        }
      );
      return;
    }

    const form = e.target;
    const comment = form.comment.value;
    const discussion_id = data.id;

    const response = await commentApi.createComment(discussion_id, { comment });
    console.log(response);
    if (response.status === 200) {
      commentApi.getComment(discussion_id).then((res) => {
        const data = res.data.commentContent.comments;

        setCommentData(data);
      });
    }
  };

  useEffect(() => {
    if (data.comments === undefined) {
      return;
    } else {
      setCommentData(data.comments.comment);
    }
  }, [data.comments]);
  return (
    <div>
      <div className={`col ${styles.container}`}>
        <h2>{data.title}</h2>
      </div>
      <div className="w-100"></div>
      <div className={`col ${styles.contentWrap}`}>
        <div>{data.content}</div>
      </div>
      <div className={styles.buttonWrap}>
        <Button variant="primary" onClick={editDiscussion}>
          수정
        </Button>
        <Button variant="danger" onClick={deleteDiscussion}>
          삭제
        </Button>
      </div>
      <div>
        <div>
          {commentData.length !== 0 &&
            commentData.map((comment) => (
              <div>
                <div key={comment.id}>{comment.userNickname}</div>
                <div key={comment.id}>{comment.comment}</div>
              </div>
            ))}
        </div>
        <Form onSubmit={(e) => onSubmit(e)}>
          <InputGroup className={styles.contentArea}>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              placeholder="댓글을 입력해주세요"
              name="comment"
              defaultValue={data.comment}
              required
            />
          </InputGroup>
          <div className={styles.buttonWrap}>
            <Button variant="primary" type="submit">
              작성
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default DiscussionDetail;
