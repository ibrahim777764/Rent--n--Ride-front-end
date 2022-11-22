
import { LOADING_USER, SIGN_IN_SUCCESS, SIGN_IN_ERRORS, SIGN_IN_FAILURE } from './Action'

const API_URL = 'https://protected-sea-38971.herokuapp.com/api/v1'

export const signinUser = ({ email, password }) => (dispatch) => {
  // console.log(user_name)
  dispatch({ type: LOADING_USER })

  fetch(API_URL + '/login', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      email,
      password
    })
  })
    .then(res => res.json())
    .then(data => {
      if (data.failure) {
        alert(data.failure)
      }

      if (data.user !== undefined) {
        localStorage.setItem("token", data.jwt)
        alert(data.success)
        return dispatch({ type: SIGN_IN_SUCCESS, payload: data })
      } else {
        alert(data.errors.map(error => error))
        return dispatch({ type: SIGN_IN_ERRORS, payload: data })
      }
    })
    .catch(err => {
      alert("Unable to SignIn At This Time")
      return dispatch({ type: SIGN_IN_FAILURE, payload: err })
    })
}