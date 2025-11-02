import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../App';

const Header = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header style={headerStyle}>
      <h1 className="logo">The Secret Ingredient</h1>
      <nav className="nav-links">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate('/'); }}>Home</a>
        <a href="#recipes">Recipes</a>
        <a href="/profile" onClick={(e) => { e.preventDefault(); navigate('/profile'); }}>Profile</a>
        <span style={welcomeStyle}>Welcome, {user?.username}!</span>
        <button 
          onClick={handleLogout}
          style={logoutButtonStyle}
        >
          Logout
        </button>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#ff6f00',
  padding: '15px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};

const logoutButtonStyle = {
  background: 'none',
  border: 'none',
  color: 'white',
  fontSize: '1.1em',
  padding: '10px 15px',
  borderRadius: '20px',
  cursor: 'pointer',
  fontFamily: "'Fredoka One', cursive",
  transition: 'background-color 0.3s'
};

const welcomeStyle = {
  color: 'white',
  fontSize: '1em',
  padding: '10px 15px',
};

export default Header;