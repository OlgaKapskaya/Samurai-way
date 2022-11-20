import {UsersType} from "../../../BLL/store";
import s from './UserCard.module.css'
import {Button} from "@material-ui/core";
import noAvatarImg from '../../../IMG/no_avatar_img.webp'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../../API/api";

type UserCardProps = {
    userInfo: UsersType
    setFollow: (userID: number) => void
    setUnfollow: (userID: number) => void
}
export const UserCard = (props: UserCardProps) => {
    const setFollowHandler = () => {
        usersAPI.setFollow(props.userInfo.id)
            .then( response => {
                if (response === 0){
                    props.setFollow(props.userInfo.id)
                }
            })
    }
    const setUnfollowHandler = () => {
        usersAPI.setUnfollow(props.userInfo.id)
            .then(response => {
                if (response === 0){
                    props.setUnfollow(props.userInfo.id)
                }
            })

    }

    return (
        <div className={s.userCardContainer}>
            <div className={s.avatarAndButton}>
                <NavLink to={'/profile/' + props.userInfo.id}>
                    <img className={s.avatar}
                         alt={'avatar'}
                         src={props.userInfo.photos.large !== null ? props.userInfo.photos.large : noAvatarImg}/>
                </NavLink>

                {!props.userInfo.followed
                    ? <Button size='small'
                              variant='outlined'
                              color='primary'
                              onClick={setFollowHandler}>
                        FOLLOW
                    </Button>
                    : <Button size='small'
                              variant='outlined'
                              color='secondary'
                              onClick={setUnfollowHandler}>
                        UNFOLLOW
                    </Button>
                }

            </div>
            <div className={s.userInfo}>
                <NavLink to={'/profile/' + props.userInfo.id}>
                    <div className={s.name}>{props.userInfo.name}</div>
                </NavLink>
                <div>Status: {props.userInfo.status}</div>
            </div>
            <div className={s.userLocation}>
                {/*<div>{props.userInfo.}</div>*/}
                {/*<div>{props.userInfo.location.city}</div>*/}
            </div>

        </div>
    )
}