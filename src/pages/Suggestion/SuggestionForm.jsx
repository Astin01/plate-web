import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import SuggestionFormComponent from '../../components/Suggestion/SuggestionForm';
import * as suggestionApi from '../../apis/suggestion';
import * as restaurantApi from '../../apis/restaurant';
import { LoginContext } from '../../contexts/LoginContextProvider';
import * as Swal from '../../apis/alert';
import styles from '../../css/Suggestion/SuggestionFormPage.module.css';

const SuggestionForm = ({ isTrue }) => {
  const params = useParams();
  let [data, setData] = useState([]);
  const { isLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      Swal.alert(
        '유효하지 않은 접근입니다',
        '로그인 후 이용해주세요',
        'warning',
        () => {
          navigate('/login');
        }
      );
      return;
    }
    if (isTrue) {
      suggestionApi.getSuggestion(params.id).then((res) => {
        setData(res.data);
      });
    } else {
      restaurantApi.getRestaurantById(params.id).then((res) => {
        setData(res.data);
      });
    }
  }, []);
  return (
    <div className={`container ${styles.contentWrap}`}>
      <SuggestionFormComponent isTrue={isTrue} id={params.id} data={data} />
    </div>
  );
};

export default SuggestionForm;
