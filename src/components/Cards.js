import Card from './Card';

const Cards = ({ staysData }) => {
  return (
    <div className="cards grid-container">
      {staysData.map((stay) => {
        return <Card stayData={stay} key={stay.id} />;
      })}
    </div>
  );
};

export default Cards;
