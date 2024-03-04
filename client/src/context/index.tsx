import {ApiProvider} from "./ApiContext";
import React from "react";
import {GlobalProvider} from "./GlobalContext";
import {MeProvider} from "./MeContext";
import {BrowserRouter} from "react-router-dom";

export const AppWrapper = (props : {children: React.ReactNode}) => {
    return(
        <BrowserRouter>
            <GlobalProvider>
                <ApiProvider>
                    <MeProvider>
                        {props.children}
                    </MeProvider>
                </ApiProvider>
            </GlobalProvider>
        </BrowserRouter>
    )
}