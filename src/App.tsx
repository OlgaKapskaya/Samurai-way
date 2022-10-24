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
import {ActionDispatchType, StateType} from "./redux/store";


type AppProps = {
    state: StateType
    dispatch: (action: ActionDispatchType) => void
}

function App(props: AppProps) {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navigation/>
                {/*<Route path={'/'} render={() => <Content postData={props.state.postData}*/}
                {/*                                         user={props.state.user}*/}
                {/*                                         addPost={props.addPost}*/}
                {/*                                         addLike={props.addLike}*/}
                {/*                                         newPostText={props.state.newPostText}*/}
                {/*                                         changeNewPostText={props.changeNewPostText}/>}/>*/}
                <Route path={"/profile"} render={() => <Content postData={props.state.profilePage.postData}
                                                                user={props.state.user}
                                                                dispatch={props.dispatch}
                                                                newPostText={props.state.profilePage.newPostText}
                />}/>
                <Route path={"/dialogs"} render={() => <Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                                                messagesData={props.state.dialogsPage.messagesData}
                                                                dispatch={props.dispatch}
                />}/>
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
                {/*<Footer/>*/}

            </div>
        </BrowserRouter>
    );
}

export default App;
