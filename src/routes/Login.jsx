/* eslint linebreak-style: ["error", "windows"] */
import { Link } from 'react-router-dom';
import {  useRef, useState } from 'react';
import Button from '../components/button/Button';
import './Login.scss';
import React from 'react';
import { login } from '../redux/user/user';
import { useDispatch ,useSelector} from 'react-redux';

function LoginScreen() {
  const userState = useSelector(state => state.user);
  const sendForm = useRef();
  const loginForm = useRef();
  const email = useRef();
  const password = useRef();

  const dispatch = useDispatch();

  const [emailError, setEmailError] = useState('');

  const loginHandler = (e) => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    if (emailValue === '') {
      setEmailError('Email is required');
    } else {
      setEmailError('');
    }
    dispatch(login({email: emailValue, password: passwordValue}));
  };

  return (

    <div className="container page-login">

      <form action="#" className="login-form" method="POST" ref={loginForm}>
        <h2>LOGIN</h2>

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

        <p className="signin-message">
          Don&apos;t have an account yet?
          <Link to="/signup">
            SIGN UP
          </Link>
        </p>

        <div className="form-bottom-bar">
          <Button
            btnAxn={loginHandler}
            label="Login"
            size="main"
            color="dark"
          />
        </div>
      </form>

    </div>
  );
}
export default LoginScreen;
