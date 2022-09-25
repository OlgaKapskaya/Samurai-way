import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import Content from "./components/Content/Content";
import Footer from "./components/Footer";


function App() {
  return (
    <div className='app-wrapper'>
        <Header/>
        <Navigation/>
        <Dialogs/>
        {/*<Content/>*/}
        {/*<Footer/>*/}

    </div>
  );
}

export default App;
