import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {FindUsersContainer} from "./components/Users/FindUsersContainer";
import {Settings} from "./components/Settings/Settings";
import {stateType} from "./BLL/redux-store";
import {ContentC} from "./components/Content/ContentContainer";


type AppProps = {
    state: stateType
}

function App(props: AppProps) {
    return (
        <BrowserRouter>

            <div className='app-wrapper'>
                <Header/>
                {/*<Route path={'/'} render={() => <Content postData={props.state.profilePage.postData}*/}
                {/*                                         user={props.state.user}*/}
                {/*                                         newPostText={props.state.profilePage.newPostText}/>}*/}
                {/*/>*/}

                <Route path={"/profile/:userID?"} render={() => <ContentC/>}/>
                <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/users"} render={() => <FindUsersContainer/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
                {/*<Footer/>*/}

            </div>
        </BrowserRouter>
    );
}

export default App;
