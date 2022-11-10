import {UserCard} from "./UserCard/UserCard";
import s from './FindUser.module.css'
import {UsersType} from "../../BLL/store";
import axios from "axios";
import React from "react";


type FindUsersProps = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setFollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
    setCurrentPage: (newCurrentPage: number) => void
    setTotalUserCount: (count: number) => void
}
type FindUsersStateType = {}

export class FindUsers extends React.Component<FindUsersProps, FindUsersStateType> { //React.Component<PROPS_Type, COMPONENT_LOCAL_STATE_Type>
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUserCount(response.data.totalCount)
            })
    }
    render() {

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        const pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={"content"}>

                <div className={s.usersContainer}>
                    <div className={s.sidebar}>

                    </div>
                    <div className={s.usersCards}>
                        <div className={s.paginationContainer}>
                            {pages.map(elem => <span key={elem}
                                                              onClick={() => this.onPageChanged(elem)}
                                                              className={this.props.currentPage === elem ? s.paginationContainerSelectedItem : s.paginationContainerItem}>
                                {elem}
                            </span>)}
                        </div>
                        {this.props.users.map(elem => <UserCard key={elem.id}
                                                                userInfo={elem}
                                                                setFollow={this.props.setFollow}/>)}
                    </div>
                </div>

            </div>
        )
    }
    onPageChanged = (newPageNumber: number) => {
        this.props.setCurrentPage(newPageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${newPageNumber}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }

}

// export const FindUsers = (props: FindUsersProps) => {
//
//     useEffect(() => {
//         axios.get('https://social-network.samuraijs.com/api/1.0/users')
//             .then(response => props.setUsers(response.data.items))
//     }, [])
//
//     return (
//         <div className={"content"}>
//             <div className={s.usersContainer}>
//                 <div className={s.sidebar}>
//
//                 </div>
//                 <div className={s.usersCards}>
//                     {props.users.users.map(elem => <UserCard userInfo={elem} setFollow={props.setFollow}/>)}
//                 </div>
//             </div>
//         </div>
//     )
// }

