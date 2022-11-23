/* eslint-disable linebreak-style */
import axios from 'axios';
import './auth.scss';
import React, { useState } from 'react';
// redux hooks:
// import { useDispatch } from 'react-redux';
// action:
// import { signinUser } from '../../redux/auth/loginAction';

function SigninForm() {
  // const signedinUser = useSelector((state) => state.user);

  const [signInState, setSignInState] = useState({
    email: '',
    password: '',
  });

  const handleInputs = (e) => {
    setSignInState({
      ...signInState,
      [e.target.name]: e.target.value,
    });
  };

  // const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(signinUser(signInState));
    // setSignInState({
    //   email: '',
    //   password: '',
    // });
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    const response = await axios.post(
      'https://protected-sea-38971.herokuapp.com/api/v1/login',
      { email, password },
      {
        headers: {
          Accept: 'application/json',
          'content-type': 'application/json',
        },
      },
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
    }
    console.log(response.status);
  };
  return (
    <div className="container page-login">
      <form className="login-form" action="#" onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        {/* <p className="success-message">{signupSuccess}</p> */}

        <div className="add-padding-below">
          <input
            type="email"
            id="email"
            name="email"
            value={signInState.email}
            onChange={handleInputs}
            className="form-field"
            placeholder="Email"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            type="password"
            id="password"
            name="password"
            value={signInState.password}
            onChange={handleInputs}
            className="form-field"
            placeholder="Password"
            required
          />
        </div>

        <div className="form-bottom-bar">
          <button
            type="submit"
            className="submit-button"
            size="main"
            color="dark"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default SigninForm;
