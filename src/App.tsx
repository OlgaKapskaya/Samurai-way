import React from 'react';
import './App.css';
import './components/header.tsx'
import Header from "./components/header";
import Technologies from "./components/technologies";
import Footer from "./components/footer"

function App() {
  return (
    <div >
        Let's go!
        <Header />
        <Technologies />
        <Footer />
    </div>
  );
}

export default App;
