import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./bll/redux-store";
import {createTheme, ThemeProvider} from "@material-ui/core";
import {teal} from "@material-ui/core/colors";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: teal,
    },
});

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <HashRouter>
                <App/>
            </HashRouter>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)
