import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DiscussionFormComponent from '../../components/Discussion/DiscussionForm';

const DiscussionForm = ({ isTrue }) => {
  const params = useParams();
  let [data, setData] = useState([]);
  console.log(isTrue);
  useEffect(() => {
    if (isTrue) {
      axios({
        method: 'get',
        url: `/api/discussion/${params.id}`,
      }).then((res) => {
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
