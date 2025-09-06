import React, { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

function Auth() {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="auth-wrapper">
      {/* Logo */}
      <a href="/" className="auth-logo">
        <div className="auth-logo-icon">🌿</div>
        Eco-Finds
      </a>

      {/* Toggle Login/Register */}
      {!showRegister ? (
        <Login switchToRegister={() => setShowRegister(true)} />
      ) : (
        <Register switchToLogin={() => setShowRegister(false)} />
      )}
    </div>
  );
}

const Login = ({ switchToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [, setCookie] = useCookies(['access_token']);
  const navigate = useNavigate();

  const PostLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/login', { username, password });
      setUsername('');
      setPassword('');
      setCookie('access_token', response.data.token);
      window.localStorage.setItem('UserID', response.data.userID);
      if (response.data.userID) navigate('/');
      else alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-wrapper">
      <form className="auth-form" onSubmit={PostLogin}>
        <h1 className="auth-title">Login</h1>
        <input
          placeholder="Username"
          className="auth-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="auth-button">Login</button>
        <p className="switch-link">
          Don't have an account?{' '}
          <span className="link-text" onClick={switchToRegister}>Register here</span>
        </p>
      </form>
    </div>
  );
};

const Register = ({ switchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const PostRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/auth/register', { username, password });
      alert(response.data.message);
      setUsername('');
      setPassword('');
      switchToLogin();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-wrapper">
      <form className="auth-form" onSubmit={PostRegister}>
        <h1 className="auth-title">Register</h1>
        <input
          placeholder="Username"
          className="auth-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className="auth-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="auth-button">Register</button>
        <p className="switch-link">
          Already have an account?{' '}
          <span className="link-text" onClick={switchToLogin}>Login here</span>
        </p>
      </form>
    </div>
  );
};

export default Auth;
