import { LOAD_PHOTOS } from "../actionTypes";
const DEFAULT_STATE ={};

if (localStorage.photos){
  const photos = JSON.parse(Object.assign(localStorage.getItem("photos")));
  // const key = photos.keys(photos);
  for(var key in photos){
    DEFAULT_STATE[key] = photos[key];
  }
}
const photos = (state = DEFAULT_STATE, action) => {
  switch(action.type) {
    case LOAD_PHOTOS: {
      return {...state, [action.albumId] : action.photos};
    }
  default:
      return state;
  }
}

export default photos;