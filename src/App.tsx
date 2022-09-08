import React from 'react';
import './App.css';


function App() {
  return (
    <div className='app-wrapper'>
        <header className='header'>
            <img src='https://static.vecteezy.com/system/resources/previews/001/191/989/non_2x/circle-logo-png.png' />
        </header>

        <nav className='nav'>
            <div><a>Profile</a></div>
            <div><a>Messages</a></div>
            <div><a>News</a></div>
            <div><a>Music</a></div>
            <div><a>Settings</a></div>
        </nav>
        <div className='content'>
            <div>
                <img src='https://html5css.ru/css/img_forest.jpg'/>
            </div>
            <div>
                <img src={'https://img.freepik.com/free-icon/jpg-extension_318-1831.jpg?w=360'}/>
                description
            </div>
            <div>
                My post
                <div>New post</div>

            </div>
            <div>
                Post
            </div>
        </div>
        <footer className='footer'>footer</footer>
    </div>
  );
}

export default App;
