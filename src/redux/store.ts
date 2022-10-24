import {UserType} from "../components/Content/Content";
import {PostDataType} from "../components/Content/MyPosts/MyPosts";
import {DialogsDataType, MessagesDataType} from "../components/Dialogs/Dialogs";
import {v1} from "uuid";
import {profileReducer} from "./profileReduser";
import {dialogsReducer} from "./dialogsReducer";


//types
export type StateType = {
    user: UserType
    profilePage: profilePageType
    dialogsPage: dialogsPageType


}
export type profilePageType = {
    postData: PostDataType[]
    newPostText: string
}
export type dialogsPageType = {
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
}
export type StoreType = {
    _state: StateType
    _subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionDispatchType) => void
    _rerenderAllTree: () => void
}
export type ActionDispatchType = AddPostActionType | ChangePostTextType
    | AddLikeActionType | AddMessageActionType

//dispatch action types
export type AddPostActionType = {
    type: "ADD-POST"
}
export type ChangePostTextType = {
    type: "CHANGE-NEW-POST-TEXT"
    message: string
}
export type AddLikeActionType = {
    type: "ADD-LIKE"
    id: string
    count: number
}
export type AddMessageActionType = {
    type: "ADD-MESSAGE"
    message: string
}

//store
export const store: StoreType = {
    _state: {
        user: {
            id: v1(),
            name: 'Olga Kapskaya',
            dateOfBirth: '14.06.1991',
            city: 'Minsk',
            education: 'BSU',
            site: '-',
            avatar: 'https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg'
        },
        profilePage: {
            newPostText: "",
            postData: [
                {id: v1(), message: 'Hi, how are you?', likes: 3},
                {id: v1(), message: 'It\'s my first post', likes: 5},
                {id: v1(), message: 'Hi, how are you?', likes: 67},
                {id: v1(), message: 'Hi, how are you?', likes: 33},
                {id: v1(), message: 'Smile today', likes: 9},
            ]
        },
        dialogsPage: {
            dialogsData: [
                {
                    id: v1(),
                    name: "Viktor",
                    avatar: "https://img2.freepng.ru/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg"
                },
                {id: v1(), name: 'Boris', avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
                {id: v1(), name: 'Veronika', avatar: 'https://cdn-icons-png.flaticon.com/512/194/194938.png'},
            ],
            messagesData: [
                {id: v1(), message: "Hello!", avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
                {
                    id: v1(),
                    message: 'How are you?',
                    avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'
                },
                {
                    id: v1(),
                    message: 'Ayyyyyyyyy!!!!!',
                    avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'
                },
                {
                    id: v1(),
                    message: 'a part that combines with other parts to form something bigger:' +
                        '                        "television/aircraft/computer components' +
                        '                        "The factory supplies electrical components for cars.' +
                        '                        "The course has four main components: business law, finance, computing and management skills.' +
                        '                        "Fresh fruit and vegetables are an essential component of a healthy diet.' +
                        '                        "The control of inflation is a key component of the governments economic policy.',
                    avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'
                },
                {id: v1(), message: "Hey!", avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'}
            ]
        }


    },
    getState() {
        return this._state
    },
    _subscribe(observer: () => void) {
        this._rerenderAllTree = observer;
    },
    _rerenderAllTree() {
        this._rerenderAllTree()
    },
    dispatch(action: ActionDispatchType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, this._state.user.avatar, action)
        this._rerenderAllTree()
    }
}

