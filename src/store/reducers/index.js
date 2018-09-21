import {combineReducers} from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import photos from "./photos";
import albums from "./albums";

const rootReducer = combineReducers({
  currentUser,
  errors,
  photos,
  albums
});

export default rootReducer;