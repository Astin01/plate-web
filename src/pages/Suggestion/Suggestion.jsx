import { useParams } from 'react-router-dom';
import styles from '../../css/Suggestion/Suggestion.module.css';
import { useEffect, useState } from 'react';
import SuggestionComponent from '../../components/Suggestion/Suggestion';
import * as suggestionApi from '../../apis/suggestion';

const Suggestion = () => {
  const params = useParams();
  let [data, setData] = useState([]);

  useEffect(() => {
    suggestionApi.getAllSuggestion().then((res) => {
      setData(res.data.suggestionDto);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={`container ${styles.contentWrapper}`}>
      <div className={`row justify-content-center`}>
        <SuggestionComponent data={data} category={params.category} />
      </div>
    </div>
  );
};

export default Suggestion;
