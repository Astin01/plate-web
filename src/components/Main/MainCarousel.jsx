import Carousel from 'react-bootstrap/Carousel';

import style from '../../css/Main/MainCarousel.module.css';
import { useNavigate } from 'react-router-dom';

export default function MainCarousel({ data }) {
  const navigate = useNavigate();
  let CarouselList =
    data &&
    data.map((item, index) => {
      return (
        <Carousel.Item key={index}>
          <div
            onClick={() => {
              navigate(`/notice/${item.id}`);
            }}
            className={style.slidercontents}
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          >
            <div className={style.wrapText}>
              <h1>{item.title}</h1>
            </div>
          </div>
        </Carousel.Item>
      );
    });
  return (
    <>
      <Carousel fade>{CarouselList}</Carousel>
    </>
  );
}
