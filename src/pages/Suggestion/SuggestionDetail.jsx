import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SuggestionDetailComponent from '../../components/Suggestion/SuggestionDetail';

const SuggestionDetail = () => {
  const params = useParams();
  let [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: 'get',
      url: `/api/suggestion/${params.id}`,
    }).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="container">
      <SuggestionDetailComponent data={data} />
    </div>
  );
};

export default SuggestionDetail;
