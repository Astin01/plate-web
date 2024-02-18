import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NoticeComponent from '../../components/Notice/Notice';
import * as noticeApi from '../../apis/notice';
import styles from '../../css/Notice/NoticePage.module.css';

const Notice = () => {
  const param = useParams();
  let [data, setData] = useState([]);

  useEffect(() => {
    noticeApi.getNotice(param.id).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className={styles.contentWrap}>
      <NoticeComponent data={data} />
      <div></div>
    </div>
  );
};

export default Notice;
