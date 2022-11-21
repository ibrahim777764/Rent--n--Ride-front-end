/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint linebreak-style: ["error", "windows"] */
// import React, { useRef, useState } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/button/Button';
import './Login.scss';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  // eslint-disable-next-line camelcase
    password_confirmation: '',
  });
  // const name = useRef();
  // const email = useRef();
  // const password = useRef();
  // // eslint-disable-next-line camelcase
  // const password_confirmation = useRef();

  // const [isActive, setActive] = useState(true);

  const ToggleClass = () => {
    setActive(false);
  };

  const sendForm = async () => {
    const signupOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          name: name.current.value.trim(),
          email: email.current.value.trim(),
          password: password.current.value,
          password_confirmation: password_confirmation.current.value,
        },
      ),
    };

    await fetch('https://protected-sea-38971.herokuapp.com/api/v1/users', signupOptions);

    const loginOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(
        {
          email: name.current.value.trim(),
          password: password.current.value,
        },
      ),
    };

    const dataResponse = await fetch('https://protected-sea-38971.herokuapp.com/auth/login', loginOptions);
    if (dataResponse.ok) {
      const userData = await dataResponse.json();
      localStorage.setItem('current_user', JSON.stringify(userData));
      window.location.href = '/';
    } else {
      ToggleClass();
    }
  };

  return (
    <div className="container page-login">
      <form action="#" className="login-form" method="POST" id="signup-form">
        <h2>SIGNUP</h2>

        <div className="add-padding-below">
          <span className={isActive ? 'error-message' : 'error-message active'}>This username or email already exists </span>
          <input
            ref={name}
            type="text"
            id="name"
            name="name"
            className="form-field"
            placeholder="Name"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            ref={email}
            type="email"
            id="email"
            name="email"
            className="form-field"
            placeholder="Email"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            ref={password}
            type="text"
            id="password"
            name="password"
            className="form-field"
            placeholder="Password"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            ref={password_confirmation}
            type="text"
            id="password"
            name="password_confirmation"
            className="form-field"
            placeholder="confirm password"
            required
          />
        </div>

        <p className="signin-message">
          Already have an account?
          <Link to="/login">
            LOGIN
          </Link>
        </p>

        <div className="form-bottom-bar">
          <Button
            btnAxn={sendForm}
            label="Signup"
            size="main"
            color="dark"
          />
        </div>
      </form>

    </div>
  );
}

export default Signup;
