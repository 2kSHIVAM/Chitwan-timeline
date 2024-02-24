import {AxiosRequestConfig} from "axios";

export interface IApiContext {
    fetchData:  (config: AxiosRequestConfig<any>) => Promise<unknown>
    loading: Boolean
}

export type Notification = {
    type: "error" | "success" | "warning"
    message: string
    duration?: number
}

export type IGlobalContext = {
    notifications: Notification[]
    pushNotification: (newNotification: Notification) => void
}