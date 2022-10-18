import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/state";

let rerenderAllTree = () => {
    ReactDOM.render(
        <App state={store.getState()}
             addPost={store.addPost.bind(store)}
             sendMessage={store.addMessage.bind(store)}
             addLike={store.addLike.bind(store)}
             changeNewPostText={store.changeNewPostText.bind(store)}
        />,
        document.getElementById('root')
    );
}
rerenderAllTree()
store.subscribe(rerenderAllTree);