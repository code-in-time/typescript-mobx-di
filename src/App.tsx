import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './test';
import allNames from './di-no/main'

const App: React.FC = () => {
  return (

    <div className="App">
      {console.log(allNames)}
      <Test />
    </div>
  );
}

export default App;
