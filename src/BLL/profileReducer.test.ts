import {v1} from "uuid";
import {
    AddLikeActionCreator,
    AddPostActionCreator,
    ChangePostTextActionCreator,
    profileReducer
} from "./profileReduser";

test('change post text function', () => {
    let data = {
        newPostText: "",
        postData: [
            {id: v1(), message: 'Hi, how are you?', likes: 3},
            {id: v1(), message: 'It\'s my first post', likes: 5},
            {id: v1(), message: 'Hi, how are you?', likes: 67},
            {id: v1(), message: 'Hi, how are you?', likes: 33},
            {id: v1(), message: 'Smile today', likes: 9},
        ]
    }
    let newPost = 'newPost'
    let newPostMessageData = profileReducer(data, ChangePostTextActionCreator(newPost))

    expect(newPostMessageData).not.toBe(data)
    expect(newPostMessageData.newPostText).toBe(newPost)
})
test('add post function', () => {
    let data = {
        newPostText: "newtext",
        postData: [
            {id: v1(), message: 'Hi, how are you?', likes: 3},
            {id: v1(), message: 'It\'s my first post', likes: 5},
            {id: v1(), message: 'Hi, how are you?', likes: 67},
            {id: v1(), message: 'Hi, how are you?', likes: 33},
            {id: v1(), message: 'Smile today', likes: 9},
        ]
    }

    let newData = profileReducer(data, AddPostActionCreator())
    expect(newData).not.toBe(data)
    expect(newData.postData).not.toBe(data.postData)
    expect(newData.postData[0].message).toBe('newtext')
})
test('add like function', () => {
    let data = {
        newPostText: "newtext",
        postData: [
            {id: '1', message: 'Hi, how are you?', likes: 0},
            {id: '2', message: 'It\'s my first post', likes: 5},
            {id: '3', message: 'Hi, how are you?', likes: 67},
            {id: '4', message: 'Hi, how are you?', likes: 33},
            {id: '5', message: 'Smile today', likes: 9},
        ]
    }
    let newData = profileReducer(data, AddLikeActionCreator(4, '1'))
    expect(newData).not.toBe(data)
    expect(newData.postData).not.toBe(data.postData)
    expect(newData.postData[0]).not.toBe(data.postData[0])
    expect(newData.postData[0].likes).toBe(4)
})