import Category from '../components/Category';
import MainCarousel from '../components/MainCarousel';
import styles from '../css/Home.module.css';

export default function Home() {
  const data = [
    {
      icon: 'stockpot',
      name: '한식',
      link: 'ko',
    },
    {
      icon: 'ramen_dining',
      name: '일식',
      link: 'jp',
    },
    {
      icon: 'kebab_dining',
      name: '중식',
      link: 'ch',
    },
    {
      icon: 'lunch_dining',
      name: '양식',
      link: 'eu',
    },
    {
      icon: 'restaurant',
      name: '기타',
      link: 'etc',
    },
    {
      icon: 'local_cafe',
      name: '카페',
      link: 'cafe',
    },
  ];
  return (
    <>
      <MainCarousel />
      <div
        className={`container ${styles.entireWrap}`}
        style={{ paddingTop: 20 }}
      >
        <div className="row">
          <Category data={data} />
        </div>
      </div>
    </>
  );
}
