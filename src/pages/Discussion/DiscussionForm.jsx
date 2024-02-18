import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DiscussionFormComponent from '../../components/Discussion/DiscussionForm';

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
    <div className="container">
      <DiscussionFormComponent data={data} />
    </div>
  );
};

export default DiscussionForm;
