import { useNavigate, useParams } from 'react-router-dom';
import styles from '../../css/Discussion/DiscussionPage.module.css';
import { useEffect, useState } from 'react';
import DiscussionComponent from '../../components/Discussion/Discussion';
import Button from 'react-bootstrap/Button';
import * as discussionApi from '../../apis/discussion';

const Discussion = () => {
  const params = useParams();
  let [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    discussionApi.getAllDiscussion().then((res) => {
      const data = res.data.discussions.discussions;
      setData(data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={`container ${styles.contentWrapper}`}>
      <div className={`row justify-content-center`}>
        <DiscussionComponent data={data} category={params.category} />
      </div>
      <div className={`${styles.button}`}>
        <Button
          variant="primary"
          className={`${styles.editButton}`}
          onClick={() => navigate('/discussion/new')}
        >
          <span class="material-symbols-outlined ">edit</span>
        </Button>
      </div>
    </div>
  );
};

export default Discussion;
