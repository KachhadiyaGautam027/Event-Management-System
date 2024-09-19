import React, { useState } from 'react';
import { login } from '../services/api';
import useAuth from '../hooks/useAuth';

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login: setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await login(formData);
    setUser(data);
  };

  const backgroundImageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: "url('https://i.postimg.cc/FR2vpqbG/black-aesthetic-mountains-4k-9k.jpg') no-repeat",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const wrapperStyle = {
    width: '420px',
    background: 'transparent',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(6px)',
    boxShadow: '0 0 10px rgba(255, 255, 255, 0.2)',
    color: '#fff',
    padding: '30px 40px',
  };

  const inputBoxStyle = {
    position: 'relative',
    width: '100%',
    height: '50px',
    margin: '30px 0',
  };

  const inputStyle = {
    width: '100%',
    height: '100%',
    background: 'transparent',
    fontSize: '15px',
    color: '#fff',
    padding: '5px 1px 3px 3px',
    border: '2px solid rgba(255, 255, 255, 0.2)',
    outline: 'none',
    borderRadius: '40px',
  };

  const iconStyle = {
    position: 'absolute',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '20px',
  };

  const rememberForgetStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14.5px',
    margin: '20px 0 15px',
  };

  const buttonStyle = {
    width: '100%',
    height: '45px',
    background: '#fff',
    border: 'none',
    outline: 'none',
    borderRadius: '40px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    color: '#333',
    fontWeight: '600',
  };

  const registerLinkStyle = {
    fontSize: '14.5px',
    textAlign: 'center',
    margin: '20px 0 15px',
  };

  return (
    <div style={backgroundImageStyle}>
      <div style={wrapperStyle}>
        <form onSubmit={handleSubmit}>
          <h1 style={{ textAlign: 'center', fontSize: '36px' }}>Login</h1>

          <div style={inputBoxStyle}>
            <input
              style={inputStyle}
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              required
            />
            <i className="bx bxs-user" style={iconStyle}></i>
          </div>

          <div style={inputBoxStyle}>
            <input
              style={inputStyle}
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
            <i className="bx bxs-lock-alt" style={iconStyle}></i>
          </div>

          <div style={rememberForgetStyle}>
            <label>
              <input type="checkbox" style={{ marginRight: '10px' }} /> Remember me
            </label>
            <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>Forgot password?</a>
          </div>

          <button type="submit" style={buttonStyle}>Login</button>

          <div style={registerLinkStyle}>
            <p>
              Don't have an account? <br />
              <a href="#" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600' }}>Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
