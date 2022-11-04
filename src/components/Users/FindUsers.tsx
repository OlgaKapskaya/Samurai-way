import {UserCard} from "./UserCard/UserCard";
import s from './FindUser.module.css'
import {usersPageType, UsersType} from "../../BLL/store";

type FindUsersProps = {
    users: usersPageType
    setFollow: (userID: string) => void
    setUsers: (users: UsersType[]) => void
}
export const FindUsers = (props: FindUsersProps) => {
    if (props.users.users.length === 0) {
        props.setUsers([
            {userID: 'qwerty1', followed: true, name: 'Olga', location: {country: 'Belarus', city: 'Minsk'}, status: '))', avatar: 'https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png', site: '', dateOfBirth: "", education:''},
            {userID: 'qwerty2', followed: true, name: 'Veronika', location: {country: 'Belarus', city: 'Minsk'}, status: '))', avatar: 'https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png', site: '', dateOfBirth: "", education:''},
            {userID: 'qwerty3', followed: false, name: 'Sergey', location: {country: 'Belarus', city: 'Minsk'}, status: '))', avatar: 'https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png', site: '', dateOfBirth: "", education:''},
            {userID: 'qwerty4', followed: false, name: 'Peter', location: {country: 'Belarus', city: 'Minsk'}, status: '))', avatar: 'https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png', site: '', dateOfBirth: "", education:''},
            {userID: 'qwerty5', followed: false, name: 'Gleb', location: {country: 'Belarus', city: 'Minsk'}, status: '))', avatar: 'https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png', site: '', dateOfBirth: "", education:''},
            {userID: 'qwerty6', followed: true, name: 'Slava', location: {country: 'Belarus', city: 'Minsk'}, status: '))', avatar: 'https://vk-wiki.ru/wp-content/uploads/2019/06/user-1.png', site: '', dateOfBirth: "", education:''}
        ])
    }
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