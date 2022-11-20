import {UsersType} from "../../../BLL/store";
import s from './UserCard.module.css'
import {Button} from "@material-ui/core";
import noAvatarImg from '../../../IMG/no_avatar_img.webp'
import {NavLink} from "react-router-dom";
import axios from "axios";

type UserCardProps = {
    userInfo: UsersType
    setFollow: (userID: number) => void
    setUnfollow: (userID: number) => void
}
export const UserCard = (props: UserCardProps) => {
    const setFollowHandler = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.userInfo.id}`, {}, {
            withCredentials: true,
            headers: {
                "API-KEY": "a3689f8d-4bdb-4cdd-9a1a-83733437adfc"
            }
        })
            .then(response => {
                if (response.data.resultCode === 0){
                    props.setFollow(props.userInfo.id)
                }
            })
    }
    const setUnfollowHandler = () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.userInfo.id}`, {
            withCredentials: true,
            headers: {
                "API-KEY": "a3689f8d-4bdb-4cdd-9a1a-83733437adfc"
            }
        })
            .then(response => {
                if (response.data.resultCode === 0){
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