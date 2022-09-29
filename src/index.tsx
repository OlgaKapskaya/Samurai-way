import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let user = {
    id: 1,
    name: 'Olga Kapskaya',
    dateOfBirth: '14.06.1991',
    city: 'Minsk',
    education: 'BSU',
    site: '-',
    avatar: 'https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg'

}
let postData = [
    {id: 1, message: 'Hi, how are you?', likes: 3},
    {id: 2, message: 'It\'s my first post', likes: 5},
    {id: 3, message: 'Hi, how are you?', likes: 67},
    {id: 4, message: 'Hi, how are you?', likes: 33},
    {id: 5, message: 'Smile today', likes: 9},
]
let dialogsData = [
    {id: 1, name: "Viktor", avatar:"https://img2.freepng.ru/20180904/vji/kisspng-avatar-image-computer-icons-likengo-usertesting-index-5b8ec1242fdcf5.6000571015360822121961.jpg"},
    {id: 2, name: 'Boris', avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
    {id: 3, name: 'Veronika', avatar: 'https://cdn-icons-png.flaticon.com/512/194/194938.png'},
]
let messagesData = [
    {id: 1, message: "Hello!", avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
    {id: 2, message: 'How are you?', avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
    {id: 3, message: 'Ayyyyyyyyy!!!!!', avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
    {id: 4, message: 'a part that combines with other parts to form something bigger:' +
            '                        "television/aircraft/computer components' +
            '                        "The factory supplies electrical components for cars.' +
            '                        "The course has four main components: business law, finance, computing and management skills.' +
            '                        "Fresh fruit and vegetables are an essential component of a healthy diet.' +
            '                        "The control of inflation is a key component of the governments economic policy.', avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'},
    {id:5, message: "Hey!", avatar: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png'}
]



ReactDOM.render(
    <App user={user} postData={postData} messagesData={messagesData} dialogsData={dialogsData}/>,
  document.getElementById('root')
);