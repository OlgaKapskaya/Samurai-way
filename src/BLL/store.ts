import {PostDataType} from "../components/Content/MyPosts/MyPosts";
import {DialogsDataType, MessagesDataType} from "../components/Dialogs/Dialogs";
import {
    FollowingInProgressAT,
    FollowUserAT,
    SetCurrentPageAT,
    SetPageSizeAT,
    SetTotalUserCountAT,
    SetUsersAT,
    ToggleIsFetchingAT, UnfollowUserAT, UserReducerAT
} from "./usersReducer";
import {
    AddLikeActionType,
    AddPostActionType,
    ChangePostTextType,
    SetStatusAT,
    SetUserProfileAT
} from "./profileReduser";
import {AddMessageActionType} from "./dialogsReducer";
import {AuthReducerAT, SetUserDataAT} from "./authReducer";


//types
export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    usersPage: usersPageType
}
export type AuthDataType = {
    id: number | null
    login: string
    email: string
    isAuth: boolean
}
export type UsersType = {
    name: string
    id: number
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    },
    status: string
    followed: boolean
}
export type profilePageType = {
    postData: PostDataType[]
    newPostText: string
    profile: ProfileUserType
    status: string
}
export type dialogsPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}
export type usersPageType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
export type ProfileUserType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
        github: string
        mainLink: string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}


//dispatch action full type
export type ActionDispatchType = AddPostActionType | ChangePostTextType
    | AddLikeActionType | AddMessageActionType
    | SetUserProfileAT | AuthReducerAT | UserReducerAT | SetStatusAT


// export type StoreType = {
//     _state: StateType
//     _subscribe: (observer: () => void) => void
//     getState: () => StateType
//     dispatch: (action: ActionDispatchType) => void
//     _rerenderAllTree: () => void
// }

// export const store: StoreType = {
//     _state: {
//         user: {
//             id: v1(),
//             name: 'Olga Kapskaya',
//             dateOfBirth: '14.06.1991',
//             city: 'Minsk',
//             education: 'BSU',
//             site: '-',
//             avatar: 'https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg'
//         },
//         profilePage: {
//             newPostText: "",
//             postData: [
//                 {id: v1(), message: 'Hi, how are you?', likes: 3},
//                 {id: v1(), message: 'It\'s my first post', likes: 5},
//                 {id: v1(), message: 'Hi, how are you?', likes: 67},
//                 {id: v1(), message: 'Hi, how are you?', likes: 33},
//                 {id: v1(), message: 'Smile today', likes: 9},
//             ]
//         },
//         dialogsPage: {
//             dialogsData: [
//                 {
//                     id: v1(),
//                     name: "Viktor",
//                     avatar: "https://img2.freepng.ru/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg"
//                 },
//                 {id: v1(), name: 'Boris', avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
//                 {id: v1(), name: 'Veronika', avatar: 'https://cdn-icons-png.flaticon.com/512/194/194938.png'},
//             ],
//             messagesData: [
//                 {id: v1(), message: "Hello!", avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
//                 {
//                     id: v1(),
//                     message: 'How are you?',
//                     avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'
//                 },
//                 {
//                     id: v1(),
//                     message: 'Ayyyyyyyyy!!!!!',
//                     avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'
//                 },
//                 {
//                     id: v1(),
//                     message: 'a part that combines with other parts to form something bigger:' +
//                         '                        "television/aircraft/computer components' +
//                         '                        "The factory supplies electrical components for cars.' +
//                         '                        "The course has four main components: business law, finance, computing and management skills.' +
//                         '                        "Fresh fruit and vegetables are an essential component of a healthy diet.' +
//                         '                        "The control of inflation is a key component of the governments economic policy.',
//                     avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'
//                 },
//                 {id: v1(), message: "Hey!", avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'}
//             ]
//         }
//
//
//     },
//     getState() {
//         return this._state
//     },
//     _subscribe(observer: () => void) {
//         this._rerenderAllTree = observer;
//     },
//     _rerenderAllTree() {
//         this._rerenderAllTree()
//     },
//     dispatch(action: ActionDispatchType) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._rerenderAllTree()
//     }
// }

