import { LOAD_ALBUMS } from "../actionTypes";
var DEFAULT_STATE;
if (!localStorage.albums){
  DEFAULT_STATE = [];
} else {
  DEFAULT_STATE = JSON.parse(localStorage.getItem("albums"))
}
const albums = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case LOAD_ALBUMS: {
      return [...action.albums];
    }
    default:
      return state;
  }
}

export default albums;