import { useParams } from 'react-router-dom';
import RestaurantDetails from '../components/RestaurantDetail';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function RestaurantDetail() {
  const params = useParams();
  let [data, setData] = useState([]);
  useEffect(() => {
    axios({
      method: 'get',
      url: `/api/restaurants/name/${params.name}`,
    }).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="container">
      <RestaurantDetails data={data} />
    </div>
  );
}
