import styles from '../../css/Notice/Notice.module.css';

const Notice = ({ data }) => {
  return (
    <div className={styles.noticeWrap}>
      <h4>{data.title}</h4>

      <p>{data.content}</p>
    </div>
  );
};

export default Notice;
