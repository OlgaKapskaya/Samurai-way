import React from 'react';
import './index.css';
import {state, addPost, addMessage} from "./redux/state";
import {rerenderAllTree} from "./render";

rerenderAllTree(state);
