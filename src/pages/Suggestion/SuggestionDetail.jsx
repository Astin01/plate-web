import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SuggestionDetailComponent from '../../components/Suggestion/SuggestionDetail';
import * as suggestionApi from '../../apis/suggestion';
import styles from '../../css/Suggestion/SuggestionDetailPage.module.css';
const SuggestionDetail = () => {
  const params = useParams();
  let [data, setData] = useState([]);

  useEffect(() => {
    suggestionApi.getSuggestion(params.id).then((res) => {
      setData(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={`container ${styles.contentWrap}`}>
      <SuggestionDetailComponent data={data} />
      <div></div>
    </div>
  );
};

export default SuggestionDetail;
