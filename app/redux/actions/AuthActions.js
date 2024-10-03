import * as actions from "../Type";

export const addUser = (user) => {
  return {
    type: actions.ADD_USER,
    payload: user
  }
}

export const login = (credentials) => {
  console.log("credentials: ",credentials)
  return {
    type: actions.LOGIN_USER,
    payload: credentials
  }
}

export const removeUser = () => {
  return {
    type: actions.REMOVE_USER,
  }
}