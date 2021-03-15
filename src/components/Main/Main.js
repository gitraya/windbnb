import Cards from './Cards';

const Main = ({ staysData }) => {
  return (
    <main>
      <div className="main-header">
        <h1>Stays in Finland</h1>
        <small>{staysData.length - 2}+ stays</small>
      </div>
      <Cards staysData={staysData} />
    </main>
  );
};

export default Main;
