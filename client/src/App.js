import React, { useState } from 'react';
import NavBar from './navbar';
import Popup from './popup';
import './App.css'; 

function App() {
  const [showPopup, setShowPopup] = useState(null);

  const backgroundStyle = {
    backgroundImage: "url('/bg.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100%'
  };

  return (
    <div className="App" style={backgroundStyle}>
      <NavBar onShowLogin={() => setShowPopup('login')} onShowRegister={() => setShowPopup('register')} />
      {showPopup && <Popup show={showPopup} setShow={setShowPopup} />}
    </div>
  );
}

export default App;
