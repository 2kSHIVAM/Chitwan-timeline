import React, {useEffect, useState} from "react";
import axios, {AxiosError, AxiosRequestConfig} from "axios";
import {IApiContext, TResponse} from "../types";
import {useGlobal} from "./GlobalContext";

const ApiContext = React.createContext<IApiContext>({
    fetchData: async () => {
        return
    },
    loading: false
})


export const ApiProvider = (props : {children: React.ReactNode} ) => {
    const {pushNotification} = useGlobal()
    let apiInstance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    })
    apiInstance.defaults.headers.common['Accept'] = 'application/json'
    const [loading,setLoading] = useState(false)

    const fetchData = async (config:AxiosRequestConfig<any>) => {
        setLoading(true)
        try {
            const res : TResponse<any> = (await apiInstance(config)).data
            if(res.error){
                pushNotification({
                    type:"error",
                    message: res.error.description,
                    duration:5
                })
            }else if(res.data.notify){
                const notify = res.data.notify
                pushNotification({
                    type: notify.type.warn ? "warning" : "success",
                    message:notify.message
                })
            }
            return res
        } catch (e) {
            let res = e as AxiosError
            if(res.response){
                const error = res.response.data as any
                pushNotification({
                    type:"error",
                    message: error.message,
                    duration:5
                })
            }
            return res
        }finally {
            setLoading(false)
        }
    };

    return(
        <ApiContext.Provider value={{fetchData,loading}} {...props}>

        </ApiContext.Provider>
    )
}

export const useApi = () => {
    const context = React.useContext(ApiContext)
    if(context !== undefined){
        return context
    }
    throw new Error("useApi must be used within a ApiProvider")
}