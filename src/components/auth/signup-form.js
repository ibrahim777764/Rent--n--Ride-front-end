/* eslint-disable linebreak-style */
/* eslint-disable react/no-typos */
/* eslint-disable react/prop-types */
/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
import { useState } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';

// import { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { signUp } from '../../redux/auth/signup';

function SignupForm() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const location = useLocation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setpassword_confirmation] = useState('');
  const [msg, setMsg] = useState('');
  // const history = useHistory();

  // useEffect(() => {
  //   if (userSession && location.pathname === '/signup') navigate('/');
  // }, [location]);

  const onSubmit = async (e) => {
    // e.preventDefault();
    // const formObject = new FormData(e.target);
    // const data = Object.formEntries(formObject.entries());
    // console.log(data);

    e.preventDefault();
    try {
      await axios.post('https://protected-sea-38971.herokuapp.com/api/v1/users', {
        name,
        email,
        password,
        password_confirmation,
      });
      // history.push('/');
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }

    // dispatch(signUp(data));
    // navigate('/login');
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(signUp(state));
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   // const formObject = new FormData(e.target);
  //   // const data = Object.formEntries(formObject.entries());
  //   dispatch(signUp(state));
  //   // navigate('/login');
  // };
  return (
    <div className="container page-login">
      <form className="login-form" onSubmit={onSubmit}>
        <p className="has-text-centered">{msg}</p>
        <h2>SIGNUP</h2>

        <div className="add-padding-below">
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-field"
            placeholder="Name"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-field"
            placeholder="Email"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-field"
            placeholder="Password"
            required
          />
        </div>

        <div className="add-padding-below">
          <input
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={(e) => setpassword_confirmation(e.target.value)}
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
