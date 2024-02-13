import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SuggestionFormComponent from '../../components/Suggestion/SuggestionForm';

const SuggestionForm = ({ isTrue }) => {
  const params = useParams();
  let [data, setData] = useState([]);
  useEffect(() => {
    if (isTrue) {
      axios({
        method: 'get',
        url: `/api/suggestion/${params.id}`,
      }).then((res) => {
        setData(res.data);
      });
    } else {
      debugger;
      axios({
        method: 'get',
        url: `/api/restaurants/id/${params.id}`,
      }).then((res) => {
        setData(res.data);
      });
    }
  }, []);
  return (
    <div className="container">
      <SuggestionFormComponent isTrue={isTrue} id={params.id} data={data} />
    </div>
  );
};

export default SuggestionForm;
