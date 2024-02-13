import { useNavigate } from 'react-router-dom';
import styles from '../../css/Suggestion/Suggestion.module.css';

const Suggestion = ({ data }) => {
  const navigate = useNavigate();

  let Suggestion = data.map((data) => {
    return (
      <>
        <div
          className={`col text-center`}
          onClick={() => navigate(`/suggestion/${data.id}`)}
        >
          <div className={`${styles.menuWrapper}`}>
            <span className={`${styles.name}`}>{data.title}</span>
          </div>
        </div>
        <div className="w-100"></div>
      </>
    );
  });
  return <>{Suggestion}</>;
};

export default Suggestion;
