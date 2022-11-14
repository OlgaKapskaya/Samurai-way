import s from "./Users.module.css";
import {UserCard} from "./UserCard/UserCard";
import React from "react";
import {UsersType} from "../../BLL/store";
import {Pagination} from "@material-ui/lab";

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


    return (
        <div className={'content'}>
            <div className={s.usersContainer}>
                <div className={s.sidebar}>

                </div>
                <div className={s.usersCards}>
                    <Pagination count={pagesCount}
                                color={'primary'}
                                variant="outlined"
                                shape="rounded"
                                showFirstButton
                                showLastButton
                                page={props.currentPage}
                                onChange={(event, page) => props.onPageChanged(page)}
                    />
                    {props.users.map(elem => <UserCard key={elem.id}
                                                       userInfo={elem}
                                                       setFollow={props.setFollow}/>)}
                </div>
            </div>

        </div>
    )
}