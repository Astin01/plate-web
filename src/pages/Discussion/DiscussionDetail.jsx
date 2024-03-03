import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DiscussionDetailComponent from '../../components/Discussion/DiscussionDetail';
import * as discussionApi from '../../apis/discussion';
import styles from '../../css/Discussion/DiscussionDetailPage.module.css';

const DiscussionDetail = () => {
  const params = useParams();
  let [data, setData] = useState([]);

  useEffect(() => {
    discussionApi.getDiscussion(params.id).then((res) => {
      setData(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={`container ${styles.contentWrap}`}>
      <DiscussionDetailComponent setData={setData} data={data} />
      <div></div>
    </div>
  );
};

export default DiscussionDetail;
