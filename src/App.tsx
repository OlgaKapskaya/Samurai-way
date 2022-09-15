import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";


function App() {
  return (
    <div className='app-wrapper'>
        <Header/>
        <Navigation/>
        <Content/>
        {/*<Footer/>*/}
    </div>
  );
}

export default App;
