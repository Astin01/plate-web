import { useNavigate } from 'react-router-dom';
import styles from '../../css/Discussion/Discussion.module.css';

const Discussion = ({ data }) => {
  const navigate = useNavigate();

  let Discussion = data.map((data) => {
    return (
      <>
        <div
          className={`col text-center`}
          onClick={() => navigate(`/discussion/${data.id}`)}
        >
          <div className={styles.menuWrapper}>
            <span className={styles.name}>{data.title}</span>
          </div>
        </div>
        <div className="w-100"></div>
      </>
    );
  });
  return <>{Discussion}</>;
};

export default Discussion;
