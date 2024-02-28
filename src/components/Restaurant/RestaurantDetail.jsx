import { useNavigate } from 'react-router-dom';
import styles from '../../css/Restaurant/RestaurantDetail.module.css';
import { Button } from 'react-bootstrap';

export default function RestaurantDetail({ data }) {
  const navigate = useNavigate();
  const edit = () => {
    navigate(`/suggestion/new/${data.id}`);
  };
  return (
    <>
      <div className={`col ${styles.container}`}>
        <span class={`material-symbols-outlined ${styles.icon}`}>
          {data.icon}
        </span>
      </div>
      <div class="w-100"></div>
      <div className={`col ${styles.container}`}>
        <h2>{data.name}</h2>
      </div>
      <div class="w-100"></div>
      <div class="w-100"></div>
      <div className={`col ${styles.contentWrap}`}>
        <div>{data.content}</div>
      </div>
      <Button variant="primary" className={styles.editButton} onClick={edit}>
        <span class="material-symbols-outlined">edit_document</span>
      </Button>
    </>
  );
}
