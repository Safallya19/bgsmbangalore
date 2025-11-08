import { useState } from 'react';
import axios from 'axios';
import './SignIn.css';

export default function SignIn({ onSwitchToRegister }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!formData.email || !formData.password) {
      setError('All fields are required');
      return;
    }

    try {
      // Replace with your actual API endpoint
      await axios.post('/api/signin', formData);
      // Handle successful sign in (e.g., store token, redirect)
    } catch (err) {
      setError(err.response?.data?.message || 'Sign in failed');
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-form-wrapper">
        <div className="logo-container">
          <img src="/bgsm.png" alt="BGSM Logo" className="main-logo" />
        </div>
        <h1>Sign In</h1>
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="signin-button">
            Sign In
          </button>
        </form>

        <div className="signup-link">
          Don't have an account?{' '}
          <button 
            onClick={onSwitchToRegister}
            className="switch-button"
          >
            Register here
          </button>
        </div>
      </div>
    </div>
  );
}