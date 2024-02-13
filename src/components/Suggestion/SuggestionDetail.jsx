import { Button } from 'react-bootstrap';
import styles from '../../css/Discussion/DiscussionDetail.module.css';
import { useNavigate } from 'react-router-dom';
import * as request from '../../apis/suggestion';

const SuggestionDetail = ({ data }) => {
  const navigate = useNavigate();

  const editSuggestion = () => {
    navigate(`/suggestion/edit/${data.id}`);
  };
  const deleteSuggestion = () => {
    request.deleteSuggestion(data.id);
    navigate('/suggestion');
  };

  const sendSuggestion = () => {
    const response = request.sendSuggestion(data.id);

    response.then((res) => {
      if (res.status === 200) {
        alert('반영되었습니다.');
        request.deleteSuggestion(data.id);
        navigate('/suggestion');
      } else {
        alert('반영에 실패했습니다.');
      }
    });
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
      <Button variant="primary" onClick={editSuggestion}>
        수정
      </Button>
      <Button variant="danger" onClick={deleteSuggestion}>
        삭제
      </Button>
      <Button variant="success" onClick={sendSuggestion}>
        반영
      </Button>
    </>
  );
};

export default SuggestionDetail;
