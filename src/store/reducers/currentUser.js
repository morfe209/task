import { SET_CURRENT_USER } from "../actionTypes";

var DEFAULT_STATE;  
if (!localStorage.user){
  DEFAULT_STATE = {
    isAuthenticated: false, // hopefully be true, when logged in
    user: {} //all the user info when logged in
}
} else {
  DEFAULT_STATE = {
    isAuthenticated: true, // hopefully be true, when logged in
    user: JSON.parse(localStorage.user) //all the user info when logged in
  }
}


export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        // turn empty object into false or if there are keys, true
        isAuthenticated: !!Object.keys(action.user).length,
        user: action.user
      };
    default:
      return state;
  }
}