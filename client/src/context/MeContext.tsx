import React, {useState} from "react";
import {TMe} from "../types";

const MeContext = React.createContext<{
    me: TMe,
    updateMe: (newMe: TMe) => void
}>({
    me: {},
    updateMe: (newMe) => {
        return
}
})

export const MeProvider = (props:{children:React.ReactNode}) => {
    const [me,setMe] = useState<TMe>({})
    const updateMe = (newMe: TMe) => {
        if(newMe) setMe({...me, ...newMe})
    }
    return(
        <MeContext.Provider value={{me,updateMe}} {...props}>

        </MeContext.Provider>
    )
}

export const useMe = () => {
    const context = React.useContext(MeContext)
    if(context !== undefined) return context
    throw new Error("useMe moust be used within a MeProvider")
}