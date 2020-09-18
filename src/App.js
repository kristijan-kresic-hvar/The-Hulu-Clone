import React, { useState } from 'react';
import './App.css';

import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Results from './components/Results/Results';
import requests from './requests';

function App() {

  const [selectedOption, setSelectedOption] = useState(requests.fetchTrending);

  return (
    <div className="app">

      <Header />

      <Nav setSelectedOption={setSelectedOption}/>

      <Results selectedOption={selectedOption} />

    </div>
  );
}

export default App;
