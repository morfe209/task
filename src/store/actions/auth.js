import {apiCall} from "../../services/api";
import {SET_CURRENT_USER} from "../actionTypes";
import {addError, removeError} from "./errors";

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  }
}
export function logout(){
  return dispatch => {
    localStorage.clear();
    dispatch(setCurrentUser({}))
  }
}

export function authUser(userId){
  return dispatch => {
    return new Promise((resolve, reject) => {
      return apiCall("get", `https://jsonplaceholder.typicode.com/users/${userId}`)
        // .then(response => response.json())
        .then((user) => {
          localStorage.setItem("user", JSON.stringify(user));
          dispatch(setCurrentUser(user));
          dispatch(removeError());
          resolve();
        })
        .catch((error) => {
          dispatch(addError("Wrong userId"));
          reject();
        });
    })
  }
}