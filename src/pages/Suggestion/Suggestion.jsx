import { useNavigate, useParams } from 'react-router-dom';
import styles from '../../css/Discussion/Discussion.module.css';
import { useEffect, useState } from 'react';
import SuggestionComponent from '../../components/Suggestion/Suggestion';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const Suggestion = () => {
  const params = useParams();
  let [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: 'get',
      url: `/api/suggestion`,
    }).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className={`container ${styles.wrapContent}`}>
      <div className={`row justify-content-center`}>
        <SuggestionComponent data={data} category={params.category} />
      </div>
    </div>
  );
};

export default Suggestion;
