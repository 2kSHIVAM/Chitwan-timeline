import React, {useState} from "react";
import {IGlobalContext, Notification} from "../types";

const GlobalContext = React.createContext<IGlobalContext>({
    notifications: [],
    pushNotification: (newNotification: Notification) => {
        return
    }
})

export const GlobalProvider = (props: {children: React.ReactNode}) => {
    const [notifications,setNotifications] = useState<Notification[]>([])
    const pushNotification = (newNotification: Notification) => {
        setNotifications([...notifications,newNotification])
    }

    return(
        <GlobalContext.Provider value={{notifications,pushNotification}} {...props}>

        </GlobalContext.Provider>
    )
}

export const useGlobal = () => {
    const context = React.useContext(GlobalContext)
    if(context !== undefined) return context
    throw new Error("useGlobal must be used within GlobalProvider")
}