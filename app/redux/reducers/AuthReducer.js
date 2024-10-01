import * as actions from '../Type'

const initialState = {
  isUserLoggedIn: false,
  users: [],
  currentUser: null
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_USER:
      return {
        ...state,
        isUserLoggedIn: true,
        users: [...state.users, action.payload],
        currentUser: action.payload,
      }
    case actions.LOGIN_USER:
      const user = state.users.find(
        (u) => u.email === action.payload.email && u.password === action.payload.password
      );
      console.log("user in actions: ",user)
      return {
        ...state,
        isUserLoggedIn: !!user,
        currentUser: user, 
      };
      case actions.REMOVE_USER:
        return {
          ...state,
          isUserLoggedIn: false,
          currentUser: null, 
        };
    default:
      return state;
  }
}