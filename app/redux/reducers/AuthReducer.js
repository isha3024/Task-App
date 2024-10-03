import { ToastAndroid } from 'react-native'

import * as actions from '../Type'

const initialState = {
  isUserLoggedIn: false,
  users: [],
  currentUser: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_USER:
      console.log("users in ADD_USER: ", state.users)
      return {
        ...state,
        isUserLoggedIn: false,
        users: [...state.users, action.payload],
      }
    case actions.LOGIN_USER:
      console.log("users in aciton: ", state.users)
      const user = state.users.find(
        (u) => u.email === action.payload.email && u.password === action.payload.password
      );
      if (user) {
        ToastAndroid.show('User logged in', ToastAndroid.SHORT);
        return {
          ...state,
          isUserLoggedIn: true,
          currentUser: user
        }
      } else {
        ToastAndroid.show('Invalid email or password', ToastAndroid.SHORT);
        return {
          ...state,
          isUserLoggedIn: false,
          currentUser: null,
        }
      }
    case actions.REMOVE_USER:
      console.log('Logging out user...');
      return {
        ...state,
        isUserLoggedIn: false,
        currentUser: null,
      };
    default:
      return state;
  }
}