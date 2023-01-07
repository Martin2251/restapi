export enum FetchState {
    LOADING = "LOADING",
    SUCCESS = "SUCCESS",
    ERROR= "ERROR",
    DEFAULT= "DEFAULT",
}


export type PostData = {
    userId:number;
    id:number;
    title:string;
    body:string;
}