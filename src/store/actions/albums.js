import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_ALBUMS } from "../actionTypes";

export const loadAlbums = albums =>({
  type: LOAD_ALBUMS,
  albums
});

export const fetchAlbums = (userId) => {
  return dispatch => {
    return apiCall("get",`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
      // .then(response => response.json())
      .then(albums => {
        localStorage.setItem("albums", JSON.stringify(albums));
        dispatch(loadAlbums(albums));
      })
      .catch((err) => {
        dispatch(addError(err.messages));
      })
  }
}



