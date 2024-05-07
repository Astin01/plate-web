import { Button } from 'react-bootstrap';
import styles from '../../css/Suggestion/SuggestionDetail.module.css';
import { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContextProvider';
import { useNavigate } from 'react-router-dom';
import * as suggestionApi from '../../apis/suggestion';
import * as Swal from '../../apis/alert';

const SuggestionDetail = ({ data }) => {
  const navigate = useNavigate();
  const { userInfo, userRole } = useContext(LoginContext);

  const notUser = () => {
    if (userInfo.userId !== data.userId) {
      Swal.alert(
        '유효하지 않은 접근입니다',
        '작성자만 수정, 삭제가 가능합니다',
        'warning',
        () => {
          navigate('/suggestion');
        }
      );
      return true;
    }
  };

  const notAdmin = () => {
    if (!userRole.isAdmin) {
      Swal.alert(
        '유효하지 않은 접근입니다',
        '관리자만 반영이 가능합니다',
        'warning',
        () => {
          navigate('/suggestion');
        }
      );
      return true;
    }
  };
  const editSuggestion = () => {
    if (notUser()) {
      return;
    }
    navigate(`/suggestion/edit/${data.id}`);
  };
  const deleteSuggestion = async () => {
    const NO_CONTENT = 204;
    if (notUser()) {
      return;
    }
    const response = await suggestionApi.deleteSuggestion(data.id);

    if (response.status === NO_CONTENT) {
      Swal.alert('제안 삭제 완료', '메인화면으로 이동합니다', 'success', () => {
        navigate('/');
      });
    } else {
      navigate('/suggestion');
    }
  };

  const sendSuggestion = () => {
    if (notAdmin()) {
      return;
    }
    const response = suggestionApi.sendSuggestion(data.id);
    response.then((res) => {
      if (res.status === 200) {
        Swal.alert(
          '제안 등록 완료',
          '메인화면으로 이동합니다',
          'success',
          () => {
            suggestionApi.deleteSuggestion(data.id);
            navigate('/');
          }
        );
      } else {
        Swal.alert('제안 등록 실패', '메인화면으로 이동합니다', 'error', () => {
          navigate('/');
        });
      }
    });
  };
  return (
    <div>
      <div className={`col ${styles.container}`}>
        <h2>{data.title}</h2>
      </div>
      <div class="w-100"></div>
      <div className={`col ${styles.contentWrap}`}>
        <div>{data.content}</div>
      </div>
      <div className={styles.buttonWrap}>
        <Button variant="primary" onClick={editSuggestion}>
          수정
        </Button>
        <Button variant="danger" onClick={deleteSuggestion}>
          삭제
        </Button>
        <Button variant="success" onClick={sendSuggestion}>
          반영
        </Button>
      </div>
    </div>
  );
};

export default SuggestionDetail;
