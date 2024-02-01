import { useNavigate } from 'react-router-dom';
import styles from '../css/Category.module.css';

export default function Category({ data }) {
  const navigate = useNavigate();

  let Category = data.map((data) => {
    return (
      <div
        className="col-md-4 text-center"
        onClick={() => navigate(`/category/${data.link}/restaurant`)}
      >
        <span className={`material-symbols-outlined ${styles.textlarge}`}>
          {data.icon}
        </span>
        <div>
          <h4>{data.name}</h4>
        </div>
      </div>
    );
  });
  return <>{Category}</>;
}
