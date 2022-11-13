import s from "./Users.module.css";
import {UserCard} from "./UserCard/UserCard";
import React from "react";
import {UsersType} from "../../BLL/store";

type UsersPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setFollow: (userID: number) => void
    onPageChanged: (pageNumber: number) => void

}
export const Users = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={'content'}>
            <div className={s.usersContainer}>
                <div className={s.sidebar}>

                </div>
                <div className={s.usersCards}>

                    <div className={s.paginationContainer}>
                        {pages.map(elem => <span key={elem}
                                                 onClick={() => props.onPageChanged(elem)}
                                                 className={props.currentPage === elem ? s.paginationContainerSelectedItem : s.paginationContainerItem}>
                                {elem}
                            </span>)}
                    </div>
                    {props.users.map(elem => <UserCard key={elem.id}
                                                       userInfo={elem}
                                                       setFollow={props.setFollow}/>)}
                </div>
            </div>

        </div>
    )
}