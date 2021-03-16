import { useRef, useEffect } from 'react';

const Card = ({ stayData }) => {
  const titleRef = useRef();
  const titleMaxText = () => {
    let max = parseInt(titleRef.current.offsetWidth / 11);
    let text = stayData.title;
    return (titleRef.current.textContent =
      text && text.length > max
        ? text.slice(0, max).split(' ').slice(0, -1).join(' ') + '...'
        : text);
  };

  useEffect(() => {
    titleMaxText();
  });

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
        <h3 ref={titleRef}>{}</h3>
      </div>
    </div>
  );
};

export default Card;
