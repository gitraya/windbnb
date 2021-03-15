const Card = ({ stayData }) => {
  return (
    <div>
      <div className="images-card">
        <img
          key={stayData.id}
          src={stayData.photo}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          alt=""
        />
      </div>
      <div className="desc-card">
        {stayData.superHost ? <button>super host</button> : ''}
        <small className="desc-type">
          {`${stayData.type} . ${stayData.beds ? `${stayData.beds} beds` : ''}`}
        </small>
        <small className="desc-rating">
          {<i className="fas star-icon"></i>} {stayData.rating}
        </small>
      </div>
      <div className="title-card">
        <h3>
          {window.screen > 540 && stayData.title.length > 36
            ? `${stayData.title.replace(/^(.{30}[^\s]*).*/, '$1')}...`
            : stayData.title}
        </h3>
      </div>
    </div>
  );
};

export default Card;
