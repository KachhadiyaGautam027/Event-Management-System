import React, { useState } from 'react';
import { register } from '../services/api';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(formData);
    setFormData({ username: '', email: '', password: '' });
  };

  const wrapperStyle = {
    position: 'relative',
    width: '400px',
    height: '530px',
    backgroundColor: 'transparent',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(20px)',
    borderRadius: '20px',
    boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
    margin: 'auto',
    padding: '40px',
    overflow: 'hidden',
    color: '#000',
  };

  const inputBoxStyle = {
    position: 'relative',
    width: '100%',
    height: '50px',
    borderBottom: '2px solid #000',
    margin: '55px 0',
  };

  const inputStyle = {
    width: '100%',
    height: '100%',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontSize: '1em',
    color: '#000',
    fontWeight: '600',
    padding: '0 35px 0 5px',
  };

  const labelStyle = {
    position: 'absolute',
    top: '50%',
    left: '5px',
    transform: 'translateY(-50%)',
    color: '#000',
    fontWeight: '500',
    pointerEvents: 'none',
    transition: '.5s',
  };

  const iconStyle = {
    position: 'absolute',
    right: '8px',
    fontSize: '1.2rem',
    color: '#000',
    lineHeight: '57px',
  };

  const buttonStyle = {
    width: '100%',
    height: '45px',
    background: '#000',
    border: 'none',
    outline: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1em',
    color: '#fff',
    fontWeight: '500',
  };

  const rememberForgotStyle = {
    fontSize: '.9em',
    color: '#000',
    fontWeight: '500',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '-15px 0 15px',
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={wrapperStyle}>
        <a href="/"><span style={{
          position: 'absolute', top: 0, right: 0, width: '45px', height: '45px', background: '#000',
          fontSize: '2em', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center',
          borderBottomLeftRadius: '20px', cursor: 'pointer', zIndex: 1
        }}>
          <ion-icon name="close-outline"></ion-icon>
        </span></a>

        <h2>Registration</h2>

        <form onSubmit={handleSubmit}>
          <div style={inputBoxStyle}>
            <input
              style={inputStyle}
              type="text"
              required
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
            />
            <label style={labelStyle}>Username</label>
            <span className="icon" style={iconStyle}><i className="bx bx-user"></i></span>
          </div>

          <div style={inputBoxStyle}>
            <input
              style={inputStyle}
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <label style={labelStyle}>Email</label>
            <span className="icon" style={iconStyle}><i className="bx bx-envelope"></i></span>
          </div>

          <div style={inputBoxStyle}>
            <input
              style={inputStyle}
              type="password"
              required
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
            <label style={labelStyle}>Password</label>
            <span className="icon" style={iconStyle}><ion-icon name="lock-closed-outline"></ion-icon></span>
          </div>

          <div style={rememberForgotStyle}>
            <label>
              <input type="checkbox" /> Remember me
            </label>
          </div>

          <button type="submit" style={buttonStyle}>Register</button>
        </form>

        <div style={{ fontSize: '.9em', color: '#000', textAlign: 'center', fontWeight: '500', margin: '25px 0 10px' }}>
          <p>Already have an account? <a href="/login" style={{ color: '#000', textDecoration: 'none', fontWeight: '600' }}>Login</a></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
