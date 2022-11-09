import {UserCard} from "./UserCard/UserCard";
import s from './FindUser.module.css'
import {usersPageType, UsersType} from "../../BLL/store";
import axios from "axios";
import {useEffect} from "react";

type FindUsersProps = {
    users: usersPageType
    setFollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
}
export const FindUsers = (props: FindUsersProps) => {

    useEffect(() => {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => props.setUsers(response.data.items))
    }, [])

    return (
        <div className={"content"}>
            <div className={s.usersContainer}>
                <div className={s.sidebar}>

                </div>
                <div className={s.usersCards}>
                    {props.users.users.map(elem => <UserCard userInfo={elem} setFollow={props.setFollow}/>)}
                </div>
            </div>
        </div>
    )
}