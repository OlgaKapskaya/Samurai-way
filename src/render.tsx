import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, addMessage, StateType, addLike} from "./redux/state";

export const rerenderAllTree = (state: StateType ) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             sendMessage={addMessage}
             addLike={addLike}
        />,
        document.getElementById('root')
    );
}