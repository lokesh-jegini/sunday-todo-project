
import './App.css';
import React from 'react';
import Header from './Header';
import AddContact from './AddContact';
import Contactlist from './Contactlist';
function App() {
  return (
    <div className="App">
      <Header />
      <AddContact />
      <Contactlist /> 
    </div>
  );
}

export default App;
