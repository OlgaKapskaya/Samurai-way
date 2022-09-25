import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import Content from "./components/Content/Content";
import Footer from "./components/Footer";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";


function App() {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <Route path={"/profile"}component={Content}/>
                <Route path={"/dialogs"} component={Dialogs}/>
                <Route path={"/news"} component={News}/>
                <Route path={"/music"} component={Music}/>
                <Route path={"/settings"} component={Settings}/>

                {/*<Footer/>*/}

            </div>
        </BrowserRouter>
    );
}

export default App;
