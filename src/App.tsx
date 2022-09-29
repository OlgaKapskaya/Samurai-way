import React from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import {Dialogs, DialogsDataType, MessagesDataType} from "./components/Dialogs/Dialogs";
import Content, {UserType} from "./components/Content/Content";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {PostDataType} from "./components/Content/MyPosts/MyPosts";

type AppProps = {
    user: UserType
    postData: PostDataType[]
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}

function App(props: AppProps) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <Route path={"/profile"} render={() => <Content postData={props.postData} user={props.user}/>}/>
                <Route path={"/dialogs"} render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
                {/*<Footer/>*/}

            </div>
        </BrowserRouter>
    );
}

export default App;
