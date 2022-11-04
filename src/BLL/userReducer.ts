import {UserType} from "../components/Content/Content";
import {v1} from "uuid";
import {ActionDispatchType} from "./store";


const CHANGE_PERSONAL_DATA = 'CHANGE-PERSONAL-DATA'


export type ChangePersonalDataAction = {
    type: 'CHANGE-PERSONAL-DATA'
    userID: string
    userName: string
    dateOfBirth: string
    city: string
    education: string
    site: string
    avatar: string
}

let initialState = {
    id: v1(),
    name: 'Olga Kapskaya',
    dateOfBirth: '14.06.1991',
    city: 'Minsk',
    education: 'BSU',
    site: '',
    avatar: 'https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg'
}

export const userReducer = (state: UserType = initialState, action: ActionDispatchType) => {
    switch (action.type) {
        case CHANGE_PERSONAL_DATA:
            let newUserData: UserType = {
                id: action.userID,
                name: action.userName,
                dateOfBirth: action.dateOfBirth,
                city: action.city,
                education: action.education,
                site: action.site,
                avatar: action.avatar
            }
            return newUserData
    }
    return state
}

export const ChangePersonalDataActionCreator = (user: UserType) => {
    return {
        type: 'CHANGE-PERSONAL-DATA',
        userID: user.id,
        userName: user.name,
        dateOfBirth: user.dateOfBirth,
        city: user.city,
        education: user.education,
        site: user.site,
        avatar: user.avatar
    } as ChangePersonalDataAction
}