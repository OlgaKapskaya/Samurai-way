import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import {Dialogs} from "./components/Dialogs/Dialogs";
import Content from "./components/Content/Content";
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
                <Route path={"/profile"} render={() => <Content/>}/>
                <Route path={"/dialogs"} render={() => <Dialogs/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
                {/*<Footer/>*/}

            </div>
        </BrowserRouter>
    );
}

export default App;
