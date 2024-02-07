import { useNavigate, useParams } from 'react-router-dom';
import styles from '../../css/Discussion/Discussion.module.css';
import { useEffect, useState } from 'react';
import DiscussionComponent from '../../components/Discussion/Discussion';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const Discussion = () => {
  const params = useParams();
  let [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios({
      method: 'get',
      url: `/api/discussion`,
    }).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className={`container ${styles.wrapContent}`}>
      <div className={`row justify-content-center`}>
        <DiscussionComponent data={data} category={params.category} />
      </div>
      <Button
        variant="primary"
        className={`${styles.editButton}`}
        onClick={() => navigate('/discussion/new')}
      >
        <span class="material-symbols-outlined ">edit</span>
      </Button>
    </div>
  );
};

export default Discussion;
