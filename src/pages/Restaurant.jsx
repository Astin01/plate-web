import { useParams } from 'react-router-dom';
import Restaurants from '../components/Restaurant';
import styles from '../css/Restaurant.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Restaurant() {
  const params = useParams();
  let [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: `/api/restaurants/category/${params.category}`,
    }).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className={`container ${styles.wrapContent}`}>
      <div className={`row justify-content-center`}>
        <Restaurants data={data} category={params.category} />
      </div>
    </div>
  );
}
