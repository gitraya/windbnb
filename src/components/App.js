import { useState, useEffect } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  const [stays, setStays] = useState(null);

  // Fetch Winbnb Data
  const fetchStays = async () => {
    const res = await fetch(process.env.PUBLIC_URL + '/stays.json');
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getStays = async () => {
      const jsonStays = await fetchStays();
      jsonStays.map((stay) => {
        return (stay.id = Math.floor(Math.random() * 1000) + 1);
      });
      return setStays(jsonStays);
    };
    getStays();
  }, []);

  return (
    <div className="App">
      <Header />
      {!stays ? <main></main> : <Main staysData={stays} />}
      <Footer />
    </div>
  );
}

export default App;
