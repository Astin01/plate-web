import { useParams } from 'react-router-dom';
import RestaurantComponent from '../../components/Restaurant/Restaurant';
import styles from '../../css/Restaurant/Restaurant.module.css';
import { useEffect, useState,useContext } from 'react';
import * as RestaurantApi from '../../apis/restaurant';
import { LoginContext } from "../../contexts/LoginContextProvider";

export default function Restaurant() {
  const params = useParams();
  let [data, setData] = useState([]);
  const { userInfo } = useContext(LoginContext);

  useEffect(() => {
    if(userInfo.userStatus === 'ACTIVATE'){
      RestaurantApi.getRestaurantByPreferencesCategory(params.category).then((res) => {
        setData(res.data.restaurantList);
      });
    }else{
    RestaurantApi.getRestaurantByCategory(params.category).then((res) => {
      setData(res.data.restaurantList);
    });
  }
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
