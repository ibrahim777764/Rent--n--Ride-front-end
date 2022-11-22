import React, { useState } from 'react';
// redux hooks:
import { useSelector, useDispatch } from 'react-redux';
// action:
import { signupUser } from '../../redux/auth/signUpAction';

function SignupForm(props) {
  const [userState, setUserState] = useState({
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  });

  const handleInputs = (e) => {
    setUserState({
      ...userState, [e.target.name]: e.target.value,
    });
  };


  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signupUser(userState))
    setUserState({
      username: '',
      email: '',
      password: '',
      password_confirmation: ''
    });
  }

  const signedinUser = useSelector((state) => {
    return state.user
  })

  return (
    <div className="container page-login">
      <form className="login-form" onSubmit={handleSubmit}>
        <p className="has-text-centered">{msg}</p>
        <h2>SIGNUP</h2>

        <div className="add-padding-below">
          <input
            type="text"
            name="username"
            value={userState.username}
            onChange={handleInputs}
            className="form-field"
            placeholder="Name"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            type="email"
            name="email"
            value={userState.email}
            onChange={handleInputs}
            className="form-field"
            placeholder="Email"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            type="password"
            name="password"
            value={userState.password}
            onChange={handleInputs}
            className="form-field"
            placeholder="Password"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            type="password"
            name="password_confirmation"
            value={userState.password_confirmation}
            onChange={handleInputs}
            className="form-field"
            placeholder="confirm password"
            required
          />
        </div>
        <div className="form-bottom-bar">
          <button type="submit" size="main" className="submit-button" color="dark">Sign up</button>
        </div>
      </form>

    </div>
  );
}

export default SignupForm;
