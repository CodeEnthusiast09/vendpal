"use client";

import { Provider } from "react-redux";
import Store, { persistor } from "./Store";
import { PersistGate } from "redux-persist/integration/react";


const ReduxProvider = ({ children }) => 
{
    return (
        <Provider store = { Store }>
            <PersistGate loading = {null} persistor = {persistor}>
                { children }
            </PersistGate>
        </Provider>
    )
}

export default ReduxProvider;