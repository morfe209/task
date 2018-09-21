import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_PHOTOS, ADD_NEW_PHOTO } from "../actionTypes";

export const loadPhotos = (photos, albumId) =>({
  type: LOAD_PHOTOS,
  photos,
  albumId
});

export const saveNewPhoto = photo =>({
  type: ADD_NEW_PHOTO,
  photo
})


const photos = {};
export const fetchPhotos = (albumId) => {
  
  return dispatch => {
    return apiCall("get", `https://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
      // .then(response => response.json())
      .then(data => {
        photos[albumId] = data;
        localStorage.setItem("photos", JSON.stringify(photos));
        dispatch(loadPhotos(data, albumId));
      })
      .catch((err) => {
        dispatch(addError(err.messages));
      })
  }
}


export const addNewPhoto = newPhoto => (dispatch, getState) => {
  dispatch(saveNewPhoto(newPhoto))
};