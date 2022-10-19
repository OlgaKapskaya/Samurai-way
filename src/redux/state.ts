import {UserType} from "../components/Content/Content";
import {PostDataType} from "../components/Content/MyPosts/MyPosts";
import {DialogsDataType, MessagesDataType} from "../components/Dialogs/Dialogs";
import {v1} from "uuid";

//const
const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const ADD_LIKE = 'ADD-LIKE'
const ADD_MESSAGE = 'ADD-MESSAGE'

//types
export type StateType = {
    user: UserType
    postData: PostDataType[]
    dialogsData: DialogsDataType[]
    messagesData: MessagesDataType[]
    newPostText: string

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
type AddPostActionType = {
    type: "ADD-POST"
}
type ChangePostTextType = {
    type: "CHANGE-NEW-POST-TEXT"
    message: string
}
type AddLikeActionType = {
    type: "ADD-LIKE"
    id: string
    count: number
}
type AddMessageActionType = {
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
        newPostText: "",
        postData: [
            {id: v1(), message: 'Hi, how are you?', likes: 3},
            {id: v1(), message: 'It\'s my first post', likes: 5},
            {id: v1(), message: 'Hi, how are you?', likes: 67},
            {id: v1(), message: 'Hi, how are you?', likes: 33},
            {id: v1(), message: 'Smile today', likes: 9},
        ],
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
        switch (action.type) {
            case ADD_POST : {
                let newPost = {
                    id: v1(),
                    message: this._state.newPostText,
                    likes: 0
                }
                this._state.postData = [newPost, ...this._state.postData]
                this._rerenderAllTree()
                break
            }
            case CHANGE_NEW_POST_TEXT: {
                this._state.newPostText = action.message
                this._rerenderAllTree();
                break
            }
            case ADD_LIKE: {
                this._state.postData = this._state.postData.map(elem => elem.id === action.id ? {...elem, likes: action.count} : elem)
                this._rerenderAllTree();
                break
            }
            case ADD_MESSAGE : {
                let newMessage = {
                    id: v1(),
                    message: action.message,
                    avatar: store._state.user.avatar
                };
                this._state.messagesData = [ ...this._state.messagesData, newMessage];
                this._rerenderAllTree();
                break
            }
        }
    }
}

//dispatch action creators
export const AddPostActionCreator = () => {return <AddPostActionType>{type: ADD_POST}}
export const ChangePostTextActionCreator = (message: string) => {
    return <ChangePostTextType>{type: CHANGE_NEW_POST_TEXT, message: message}
}
export const AddLikeActionCreator = (count: number, id: string) => {
    return <AddLikeActionType>{type: ADD_LIKE, count: count, id: id}
}
export const AddMessageActionCreator = (message: string) => {return <AddMessageActionType>{type: ADD_MESSAGE, message: message}}