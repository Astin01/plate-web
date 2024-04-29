import Category from '../components/Main/Category';
import MainCarousel from '../components/Main/MainCarousel';
import styles from '../css/Main/Home.module.css';
import * as notice from '../apis/notice';
import * as categoryIconApi from '../apis/categoryIcon';
import { useEffect, useState } from 'react';

export default function Home() {
  let [noticeData, setNoticeData] = useState();
  let [categoryIcon, setCategoryIcon] = useState([]);

  async function getNotice() {
    const notices = await notice.getAllNotice();
    setNoticeData(notices.data.notices);
  }
  async function getCategoryIcon() {
    let icons = await categoryIconApi.getAllCategoryIcon();
    setCategoryIcon(icons.data.iconList);
  }

  useEffect(() => {
    getNotice();
    getCategoryIcon();
  }, []);
  return (
    <>
      <MainCarousel data={noticeData} />
      <div
        className={`container ${styles.entireWrap}`}
        style={{ paddingTop: 20 }}
      >
        <div className={`row ${styles.categoryWrap}`}>
          <Category data={categoryIcon} />
        </div>
      </div>
    </>
  );
}
