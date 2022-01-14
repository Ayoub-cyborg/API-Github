import React from 'react';
import './App.css';
import Navbar from './Component/partials/Navbar';
import Users from './Component/users/Users';

function App() {
  return (
    <div className="App">
    < Navbar/>
    <div class= "container mt-2 ">
    <Users />
    </div>
    </div>
  );
}

export default App;
