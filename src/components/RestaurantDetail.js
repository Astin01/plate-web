import { useParams } from 'react-router-dom';
import styles from '../css/RestaurantDetail.module.css';
import { useEffect, useState } from 'react';

export default function RestaurantDetail({ data }) {
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
      <div className={`col ${styles.contentWrap}`}>
        <h4>추천메뉴</h4>
        <div>{data.menu}</div>
      </div>
    </>
  );
}
