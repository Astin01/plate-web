import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DiscussionFormComponent from '../../components/Discussion/DiscussionForm';
import * as discussionApi from '../../apis/discussion';
import styles from '../../css/Discussion/DiscussionFormPage.module.css';

const DiscussionForm = ({ isTrue }) => {
  const params = useParams();
  let [data, setData] = useState([]);

  useEffect(() => {
    if (isTrue) {
      discussionApi.getDiscussion(params.id).then((res) => {
        setData(res.data);
      });
    }
  }, []);
  return (
    <div className={`container ${styles.contentWrap}`}>
      <DiscussionFormComponent data={data} />
      <div></div>
    </div>
  );
};

export default DiscussionForm;
