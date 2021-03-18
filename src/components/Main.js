import Cards from './Cards/Cards';

const Main = ({ staysData }) => {
  // Function to check number of stays
  const textNumberOfStays = () => {
    return staysData.length > 6
      ? `${staysData.length - 2}+ stays`
      : staysData.length > 1
      ? `${staysData.length} stays`
      : `${staysData.length} stay`;
  };

  // Function to update heading
  const headingText = () => {
    return staysData.length > 0
      ? `Stays in ${staysData[0].country}`
      : 'No Result';
  };

  return (
    <main>
      <div className="main-header">
        <h1>{headingText()}</h1>
        <small>{textNumberOfStays()}</small>
      </div>
      <Cards staysData={staysData} />
    </main>
  );
};

export default Main;
