import React from 'react';
import './App.css';


function App() {
  return (
    <div className='app-wrapper'>
        <header className='header'>
            <img src='https://static.vecteezy.com/system/resources/previews/001/191/989/non_2x/circle-logo-png.png' />
        </header>

        <nav className='nav'>
            <div>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Music</div>
            <div>Settings</div>
        </nav>
        <div className='content'>Main content</div>
        <footer className='footer'>footer</footer>
    </div>
  );
}

export default App;
