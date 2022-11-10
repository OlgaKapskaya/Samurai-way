import {UserCard} from "./UserCard/UserCard";
import s from './FindUser.module.css'
import {UsersType} from "../../BLL/store";
import axios from "axios";
import React from "react";
import {stateType} from "../../BLL/redux-store";

type FindUsersProps = {
    users: UsersType[]
    setFollow: (userID: number) => void
    setUsers: (users: UsersType[]) => void
}

export class FindUsers extends React.Component<FindUsersProps, stateType> { //React.Component<PROPS_Type, STATE_Type>
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => this.props.setUsers(response.data.items))
    }

    render() {
        return (
            <div className={"content"}>
                <div className={s.usersContainer}>
                    <div className={s.sidebar}>

                    </div>
                    <div className={s.usersCards}>
                        {this.props.users.map(elem => <UserCard userInfo={elem} setFollow={this.props.setFollow}/>)}
                    </div>
                </div>
            </div>
        )
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

