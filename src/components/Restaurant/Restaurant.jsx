import { useNavigate } from 'react-router-dom';
import styles from '../../css/Restaurant/Restaurant.module.css';

export default function Restaurant({ data, category }) {
  const navigate = useNavigate();

  let Restaurant = data.map((data) => {
    return (
      <>
        <div
          className={`col text-center`}
          onClick={() =>
            navigate(`/category/${category}/restaurant/${data.name}`)
          }
        >
          <div className={`${styles.menuWrapper}`}>
            <span className={`material-symbols-outlined ${styles.textlarge}`}>
              {data.icon}
            </span>
            <span className={`${styles.name}`}>{data.name}</span>
          </div>
        </div>
        <div className="w-100"></div>
      </>
    );
  });
  return <>{Restaurant}</>;
}
