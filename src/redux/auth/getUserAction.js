/* eslint-disable linebreak-style */
import {
  LOADING_USER,
  GET_USER_SUCCESS, GET_USER_ERRORS, GET_USER_FAILURE,
} from './Action';

export const API_URL = 'http://127.0.0.1:3001/api/v1';
export const getUser = (token) => (dispatch) => {
  dispatch({ type: LOADING_USER });

  fetch(`${API_URL}/auto_login`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.id !== undefined) {
        dispatch({ type: GET_USER_SUCCESS, payload: data });
      }
      // alert(data.errors.map((error) => error));
      dispatch({ type: GET_USER_ERRORS, payload: data });
    })
    .catch((err) => {
      // alert('Unable To Veryify User At This Time');
      dispatch({ type: GET_USER_FAILURE, payload: err });
    });
};
