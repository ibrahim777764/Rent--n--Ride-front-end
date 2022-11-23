/* eslint-disable linebreak-style */
import {
  LOADING_USER, POST_USER_SUCCESS, POST_USER_ERRORS, POST_USER_FAILURE,
} from './Action';

const API_URL = 'https://protected-sea-38971.herokuapp.com/api/v1/users'

export const signupUser = ({
  username, email, password, password_confirmation,
}) => (dispatch) => {
  // console.log(user_name)
  dispatch({ type: LOADING_USER });

  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
      password_confirmation,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.user !== undefined) {
        localStorage.setItem('token', data.jwt);
        alert('Successfully Signed Up');
        return dispatch({ type: POST_USER_SUCCESS, payload: data });
      }
      alert(data.errors.map((error) => error));
      return dispatch({ type: POST_USER_ERRORS, payload: data });
    })
    .catch((err) => {
      alert('Unable to SignUp At This Time');
      return dispatch({ type: POST_USER_FAILURE, payload: err });
    });
};
