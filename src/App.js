import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Home from './components/Home';
import BurgerNav from './components/BurgerNav.';
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <BurgerNav />
    </div>
  );
}

export default App;
