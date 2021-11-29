import axios, { AxiosResponse } from "axios";
import Config from "../../Config";
import { ContentTypes } from "../../redux/user/sagas/api";
import {IFavourite, IPayment } from "./types";

export const payment = (data:IPayment) =>{
    return axios({
        url:`${Config.BASE_URL}/api/checkout`,
        method:'POST',
        headers:{
            'Content-Type':ContentTypes.APPLICATION_JSON
        },
        data
    })
}
export const bookApartament = (email:string) =>{
    return axios({
        url:`${Config.BASE_URL}/api/book-apartament/${email}`,method:'GET',
        headers:{
            'Content-Type':ContentTypes.APPLICATION_JSON
        },
    })
}
export const favourite = (data:IFavourite):Promise<AxiosResponse<Array<Object>>> =>{
    return axios({
        url:`${Config.BASE_URL}/api/fauvorite-apartament/check`,
        method:'POST',
        headers:{
            'Content-Type':ContentTypes.APPLICATION_JSON
        },
        data
    })
}
export const checkFavourite = (email:string) =>{
    return axios({
        url:`${Config.BASE_URL}/api/fauvorite-apartament/${email}`,
        method:'GET',
        headers:{
            'Content-Type':ContentTypes.APPLICATION_JSON
        },
    })
}