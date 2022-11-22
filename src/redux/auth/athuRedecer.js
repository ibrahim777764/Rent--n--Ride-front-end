import { LOADING_USER, POST_USER_SUCCESS, POST_USER_ERRORS, POST_USER_FAILURE, SIGN_IN_SUCCESS, SIGN_IN_ERRORS, SIGN_IN_FAILURE, GET_USER_SUCCESS, GET_USER_ERRORS, GET_USER_FAILURE } from '../actions/userAuth/actionConstants';

const initialState = {
  isLoading: false,
  error: "",
  errors: [],
  user: {},
  loggedIn: false
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_USER:
      return { ...state, isLoading: true }

    case POST_USER_SUCCESS:
      const user = action.payload.user
      return { ...state, isLoading: false, user: user, loggedIn: true }

    case POST_USER_ERRORS:
      return { ...state, isLoading: false, errors: action.payload.errors }

    case POST_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload }

    case SIGN_IN_SUCCESS:
      const signinUser = action.payload.user
      return { ...state, isLoading: false, user: signinUser, loggedIn: true }

    case SIGN_IN_ERRORS:
      return { ...state, isLoading: false, errors: action.payload.errors }

    case SIGN_IN_FAILURE:
      return { ...state, isLoading: false, error: action.payload }

    case GET_USER_SUCCESS:
      const autoUser = action.payload
      return { ...state, isLoading: false, user: autoUser, loggedIn: true }

    case GET_USER_ERRORS:
      return { ...state, isLoading: false, errors: action.payload.errors }

    case GET_USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload }

    default:
      return state
  }
}

export default userReducer;