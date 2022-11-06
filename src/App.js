import HomeContainer from './containers/HomeContainer'
import './App.css';
import React from 'react';
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
    <HeaderContainer/>
    <HomeContainer/>
    </div>
  );
}

export default App;
