import React from 'react';

function NavBar({ onShowLogin, onShowRegister }) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
      <div>
        <img src="/logo.png" alt="Logo" style={{ height: '50px' }} />
      </div>
      <div>
        <button onClick={onShowLogin}>Login</button>
        <button onClick={onShowRegister}>Register</button>
      </div>
    </nav>
  );
}

export default NavBar;
