import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {StateType} from "./BLL/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {SettingsContainer} from "./components/Settings/SettingsContainer";


type AppProps = {
    state: StateType
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

                <Route path={"/profile"} render={() => <Content postData={props.state.profilePage.postData}
                                                                user={props.state.user}
                                                                newPostText={props.state.profilePage.newPostText}
                />}/>
                <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <SettingsContainer/>}/>
                {/*<Footer/>*/}

            </div>
        </BrowserRouter>
    );
}

export default App;
