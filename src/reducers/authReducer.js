import { LOGIN, LOGOUT } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  email: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: true,
        email: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        email: ''
      };
    default:
      return state;
  }
};

export default authReducer;