const Notice = ({ image, title, content }) => {
  return (
    <div>
      <img
        src={image}
        className="event"
        style={{ width: 1100, height: 800 }}
        alt="event"
      ></img>
      <h4>{title}</h4>

      <p>{content}</p>
    </div>
  );
};

export default Notice;
