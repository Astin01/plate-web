import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DiscussionDetailComponent from '../../components/Discussion/DiscussionDetail';

const DiscussionDetail = () => {
  const params = useParams();
  let [data, setData] = useState([]);

  useEffect(() => {
    discussionApi.getDiscussion(params.id).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="container">
      <DiscussionDetailComponent data={data} />
    </div>
  );
};

export default DiscussionDetail;
