import React from "react";
import Content from "./Content";
import {PostDataType} from "./MyPosts/MyPosts";
import {ProfileUserType, StateType} from "../../BLL/store";
import {connect} from "react-redux";
import {AddLike, AddPostAC, ChangePostText, SetUserProfile} from "../../BLL/profileReduser";
import axios from "axios";

type mapStateToPropsType = {
    postData: PostDataType[]
    newPostText: string
    profile: ProfileUserType
}
type mapDispatchToPropsType = {
    AddPost: () => void
    ChangePostText: (message: string) => void
    AddLike: (count: number, id: string) => void
    SetUserProfile: (profile: ProfileUserType) => void
}

type ContentProps = {
    postData: PostDataType[]
    newPostText: string
    profile: ProfileUserType
    AddPost: () => void
    ChangePostText: (message: string) => void
    AddLike: (count: number, id: string) => void
    SetUserProfile: (profile: ProfileUserType) => void
}
type ContentStateType = {}

export class ContentContainer extends React.Component<ContentProps, ContentStateType>{
    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.SetUserProfile(response.data)
            })
    }

    render() {
        return <Content {...this.props}/>
    }
}

let mapStateToProps = (state: StateType): mapStateToPropsType => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

export const ContentC = connect(mapStateToProps, {
    AddPost: AddPostAC, ChangePostText, AddLike, SetUserProfile
} as mapDispatchToPropsType)(ContentContainer)