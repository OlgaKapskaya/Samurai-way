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
import {addLike, StateType} from "./redux/state";

type AppProps = {
    state: StateType
    addPost: (post: string) => void
    sendMessage: (message: string) => void
    addLike: (id: string, count: number) => void

}

function App(props: AppProps) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                <Route path={"/profile"} render={() => <Content postData={props.state.postData}
                                                                user={props.state.user}
                                                                addPost={props.addPost}
                                                                addLike={props.addLike}/>}/>
                <Route path={"/dialogs"} render={() => <Dialogs dialogsData={props.state.dialogsData}
                                                                messagesData={props.state.messagesData}
                                                                sendMessage={props.sendMessage}/>}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
                {/*<Footer/>*/}

            </div>
        </BrowserRouter>
    );
}

export default App;
