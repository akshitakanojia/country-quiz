import React, { useState, useEffect } from 'react';
import axios from 'axios';

import MainCard from './components/MainCard';
import { GlobalStyle } from './App.style';
import { Redirect, Route, Switch } from 'react-router';
import Home from './pages/Home/Home';
import ProtectedRoute from './components/ProtectedRoute';
import Quiz from './pages/Quiz/Quiz';

function App() {
  const [passCode, setPassCode] = useState(false)
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' render={() => <Home setPassCode={setPassCode} />} />
        {passCode && <ProtectedRoute exact path='/quiz' component={Quiz} />}
        <Route render={() => <Redirect to='/' />} />
      </Switch>
      {/* <MainCard /> */}
    </>
  );
}

export default App;
