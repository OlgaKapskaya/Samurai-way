import * as React from "react";
import {StoreReduxType} from "./redux/store";
import {store} from "./redux/redux-store";
import {ReactNode} from "react";


export const StoreContext = React.createContext({} as StoreReduxType);

type ProviderType = {
    store: StoreReduxType
    children: ReactNode
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

