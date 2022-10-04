import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state, addPost, addMessage} from "./redux/state";
import {rerenderAllTree} from "./render";

rerenderAllTree(state);
