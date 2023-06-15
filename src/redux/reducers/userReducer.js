// userReducer.js

// Action types
const SET_NAME = 'SET_NAME';
const SET_EMAIL = 'SET_EMAIL';

// Initial state
const initialState = {
  name: '',
  email: '',
};

// Reducer
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

// Action creators
export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name,
  };
};

export const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    payload: email,
  };
};

export default userReducer;
