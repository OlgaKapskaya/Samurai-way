import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FindUsersContainer from "./components/Users/FindUsersContainer";
import {Settings} from "./components/Settings/Settings";
import {stateType} from "./BLL/redux-store";
import ContentContainer from "./components/Content/ContentContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";


type AppProps = {
    state: stateType
}

function App(props: AppProps) {
    return (
        <BrowserRouter>

            <div className='app-wrapper'>
                <HeaderContainer/>
                {/*<Route path={'/'} render={() => <ContentContainer/>}/>*/}

                <Route path="/profile/:userID?" render={() => <ContentContainer/>}/>
                <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/users" render={() => <FindUsersContainer/>}/>
                <Route path="/settings" render={() => <Settings/>}/>

                <Route path="/login" render={() => <Login/>}/>
                {/*<Footer/>*/}

            </div>
        </BrowserRouter>
    );
}

export default App;
