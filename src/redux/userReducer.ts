import {ActionDispatchType} from "./store";
import {UserType} from "../components/Content/Content";
import {v1} from "uuid";

let initialState = {
    id: v1(),
    name: 'Olga Kapskaya',
    dateOfBirth: '14.06.1991',
    city: 'Minsk',
    education: 'BSU',
    site: '-',
    avatar: 'https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg'
}

export const userReducer = (state: UserType = initialState, action: ActionDispatchType) => {
            return state
}