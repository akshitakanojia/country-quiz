import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MainCard from './components/MainCard';
import { GlobalStyle } from './App.style';

function App() {
  const [countryCapitalData, setCountryCapitalData] = useState([]);
  const [countryFlagData, setCountryFlagData] = useState([]);
  const [error, setError] = useState(false);


  const getCountryCapital = () => {
    axios.get("https://countriesnow.space/api/v0.1/countries/capital")
      .then((response) => {
        setError(false)
        setCountryCapitalData(response.data.data);
      })
      .catch((error) => {
        setError(true)
      })
  }
  const getCountryFlag = () => {
    axios.get("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((response) => {
        setError(false)
        setCountryFlagData(response.data.data);
      })
      .catch((error) => {
        setError(true)
      })
  }

  useEffect(() => {
    getCountryCapital();
    getCountryFlag();
  }, [])

  return (
    <>
      <GlobalStyle />
      <MainCard countryCapitalData={countryCapitalData} countryFlagData={countryFlagData} error={error} />
    </>
  );
}

export default App;
