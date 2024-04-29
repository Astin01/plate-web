import { useParams } from 'react-router-dom';
import RestaurantDetails from '../../components/Restaurant/RestaurantDetail';
import { useEffect, useState } from 'react';
import styles from '../../css/Restaurant/RestaurantDetailPage.module.css';
import * as RestaurantApi from '../../apis/restaurant';
export default function RestaurantDetail() {
  const params = useParams();
  let [data, setData] = useState([]);
  useEffect(() => {
    RestaurantApi.getRestaurantByName(params.name).then((res) => {
      setData(res.data.restaurant);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={`container ${styles.restaurantDetailPageWrap}`}>
      <div>
        <RestaurantDetails data={data} />
      </div>
      <div></div>
    </div>
  );
}
