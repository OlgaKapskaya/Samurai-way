import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, addMessage, StateType, addLike, changeNewPostText, subscribe} from "./redux/state";
import {state} from "./redux/state";

let rerenderAllTree = () => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             sendMessage={addMessage}
             addLike={addLike}
             changeNewPostText={changeNewPostText}
        />,
        document.getElementById('root')
    );
}
rerenderAllTree()
subscribe(rerenderAllTree);