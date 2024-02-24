export type Error = {
    description:string,
    code:number
} | null

export type TResponse<D> = {
    statusCode: number,
    data:D,
    error:Error
}
export enum ROLE {
    USER="USER",
    ADMIN="ADMIN"
}