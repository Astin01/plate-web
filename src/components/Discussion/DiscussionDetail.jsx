import { Button } from 'react-bootstrap';
import styles from '../../css/Discussion/DiscussionDetail.module.css';
import { useNavigate } from 'react-router-dom';
import * as request from '../../apis/discussion';

const DiscussionDetail = ({ data }) => {
  const navigate = useNavigate();

  const editDiscussion = () => {
    navigate(`/discussion/edit/${data.id}`);
  };
  const deleteDiscussion = () => {
    request.deleteDiscussion(data.id);
    navigate('/discussion');
  };

  return (
    <>
      <div className={`col ${styles.container}`}>
        <h2>{data.title}</h2>
      </div>
      <div class="w-100"></div>
      <div className={`col ${styles.contentWrap}`}>
        <div>{data.content}</div>
      </div>
      <Button variant="primary" onClick={editDiscussion}>
        수정
      </Button>
      <Button variant="danger" onClick={deleteDiscussion}>
        삭제
      </Button>
    </>
  );
};

export default DiscussionDetail;
