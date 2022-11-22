
import './auth.scss';
import React, { useState } from 'react';
// redux hooks:
import { useSelector, useDispatch } from 'react-redux';
// action:
import { signinUser } from '../../redux/auth/loginAction'

function SigninForm(props) {

  const signedinUser = useSelector((state) => {
    return state.user
  })

  const [signInState, setSignInState] = useState({
    email: '',
    password: '',
  });

  const handleInputs = (e) => {
    setSignInState({
      ...signInState, [e.target.name]: e.target.value,
    });
  };


  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(signinUser(signInState))
    setSignInState({
      email: '',
      password: ''
    });
  }
  return (
    <div className="container page-login">

      <form className="login-form" onSubmit={handleSubmit}>
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
          <button type="submit" className="submit-button" size="main" color="dark">Login</button>
        </div>
      </form>

    </div>
  );
}

export default SigninForm;
