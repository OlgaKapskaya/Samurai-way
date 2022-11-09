import {UsersType} from "../../../BLL/store";
import s from './UserCard.module.css'
import {Button} from "@material-ui/core";
import noAvatarImg from '../../../IMG/no_avatar_img.webp'

type UserCardProps = {
    userInfo: UsersType
    setFollow: (userID: number) => void
}
export const UserCard = (props: UserCardProps) => {
    return (
        <div className={s.userCardContainer}>
            <div className={s.avatarAndButton}>
                <img className={s.avatar}
                     alt={'avatar'}
                     src={props.userInfo.photos.large !== null ? props.userInfo.photos.large : noAvatarImg}/>
                <Button size={'small'}
                        variant={'outlined'}
                        color={props.userInfo.followed ? 'primary' : 'secondary'}
                        onClick={() => props.setFollow(props.userInfo.id)}>
                    {props.userInfo.followed ? 'Follow' : 'Unfollow'}
                </Button>
            </div>
            <div className={s.userInfo}>
                <div className={s.name}>{props.userInfo.name}</div>
                <div>Status: {props.userInfo.status}</div>
            </div>
            <div className={s.userLocation}>
                {/*<div>{props.userInfo.}</div>*/}
                {/*<div>{props.userInfo.location.city}</div>*/}
            </div>

        </div>
    )
}