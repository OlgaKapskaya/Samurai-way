import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redux/redux-store";
import {Provider} from "./StoreContext";
import {createTheme, ThemeProvider} from "@material-ui/core";
import {teal} from "@material-ui/core/colors";

const theme = createTheme({
    palette: {
        primary: teal,
    },
});

let rerenderAllTree = () => {
    ReactDOM.render(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App state={store.getState()}
                />
            </ThemeProvider>
        </Provider>,
        document.getElementById('root')
    )
    ;
}
rerenderAllTree()
store.subscribe(rerenderAllTree);