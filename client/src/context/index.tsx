import {ApiProvider} from "./ApiContext";
import React from "react";
import {GlobalProvider} from "./GlobalContext";
import {MeProvider} from "./MeContext";

export const AppWrapper = (props : {children: React.ReactNode}) => {
    return(
        <GlobalProvider>
            <ApiProvider>
                <MeProvider>
                    {props.children}
                </MeProvider>
            </ApiProvider>
        </GlobalProvider>
    )
}