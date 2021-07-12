import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MainCard from './components/MainCard';
import { GlobalStyle } from './App.style';

function App() {
  const [countryData, setCountryData] = useState([]);
  const [error, setError] = useState(false);


  const getCountryData = () => {
    axios.get("https://restcountries.eu/rest/v2/all/?fields=name;flag;capital")
      .then((response) => {
        setError(false)
        setCountryData(response.data);
      })
      .catch((error) => {
        setError(true)
        console.log(error);
      })
  }

  useEffect(() => {
    getCountryData()
  }, [])

  return (
    <>
      <GlobalStyle />
      <MainCard countryData={countryData} error={error} />
    </>
  );
}

export default App;
