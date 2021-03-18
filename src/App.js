import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  // State for app
  const [stays, setStays] = useState(null);
  const [staysFiltered, setStaysFiltered] = useState(null);
  const [isFiltered, setIsFiltered] = useState(false);

  // Reference to a element
  const headerRef = useRef(null);

  // Fetch Winbnb Data
  const fetchStays = async () => {
    const res = await fetch(process.env.PUBLIC_URL + '/stays.json');
    const data = await res.json();
    return data;
  };

  // Filtering stays by search form
  const filteringStays = (e, filter) => {
    e.preventDefault();
    let city = filter[0].split(', ')[0];
    let country = filter[0].split(', ')[1];
    let maxGuests = filter[1];

    headerRef.current.hideModal();

    let data = staysFiltered.filter(
      (stay) =>
        stay.city === city &&
        stay.country === country &&
        stay.maxGuests <= maxGuests
    );

    setStaysFiltered(data);
    setIsFiltered(true);
  };

  // Reseted filter
  const resetIsFiltered = () => {
    setStaysFiltered(stays);
    setIsFiltered(false);
  };

  // Sending data to main element
  const sendDataStays = () => {
    if (!isFiltered) return stays;
    if (isFiltered) return staysFiltered;
  };

  useEffect(() => {
    const getStays = async () => {
      const jsonStays = await fetchStays();
      jsonStays.map((stay) => {
        return (stay.id = Math.floor(Math.random() * 10000) + 1);
      });
      setStaysFiltered(jsonStays);
      return setStays(jsonStays);
    };
    getStays();
  }, []);

  return (
    <div className="App">
      <Header
        filteringStays={filteringStays}
        ref={headerRef}
        resetIsFiltered={resetIsFiltered}
      />
      {!stays ? <main></main> : <Main staysData={sendDataStays()} />}
      <Footer />
    </div>
  );
}

export default App;
