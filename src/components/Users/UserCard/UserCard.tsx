import {UsersType} from "../../../BLL/store";
import s from './UserCard.module.css'
import {Button} from "@material-ui/core";


type UserCardProps = {
    userInfo: UsersType
    setFollow: (userID: string) => void
}
export const UserCard = (props: UserCardProps) => {
    return (
        <div className={s.userCardContainer}>
            <div className={s.avatarAndButton}>
                <img className={s.avatar} alt={'avatar'} src={props.userInfo.avatar}/>
                <Button size={'small'}
                        variant={'outlined'}
                        color={props.userInfo.followed ? 'primary' : 'secondary'}
                        onClick={() => props.setFollow(props.userInfo.userID)}>
                    {props.userInfo.followed ? 'Follow' : 'Unfollow'}
                </Button>
            </div>
            <div className={s.userInfo}>
                <div className={s.name}>{props.userInfo.name}</div>
                <div>Status: {props.userInfo.status}</div>
            </div>
            <div className={s.userLocation}>
                <div>{props.userInfo.location.country}</div>
                <div>{props.userInfo.location.city}</div>
            </div>

        </div>
    )
}