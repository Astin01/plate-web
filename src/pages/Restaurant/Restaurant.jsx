import { useParams } from 'react-router-dom';
import RestaurantComponent from '../../components/Restaurant/Restaurant';
import styles from '../../css/Restaurant/Restaurant.module.css';
import { useEffect, useState } from 'react';
import * as RestaurantApi from '../../apis/restaurant';

export default function Restaurant() {
  const params = useParams();
  let [data, setData] = useState([]);
  useEffect(() => {
    RestaurantApi.getRestaurantByCategory(params.category).then((res) => {
      setData(res.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={`container ${styles.wrapContent}`}>
      <div className={`row justify-content-center`}>
        <RestaurantComponent data={data} category={params.category} />
      </div>
      <div></div>
    </div>
  );
}
