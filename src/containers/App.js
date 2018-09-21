import React from 'react';
import {Provider} from "react-redux";
import {configureStore} from "../store";
import {BrowserRouter as Router} from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main";
// import {setCurrentUser} from "../store/actions/auth";
// import {loadAlbums} from "../store/actions/albums";
// import {loadPhotos} from "../store/actions/photos";



const store = configureStore();
 // && !localStorage.albums.length 
// if (localStorage.user) {
//   try {

//     // console.log(localStorage.getItem("photos"));

//     //prevent someone from manually tampering with the key of jwtToken in localStorage
//     // const user =(localStorage.user);
//     // console.log(user);
//     // store.dispatch(setCurrentUser(user));

//     // const albums = localStorage.getItem("albums").split();
//     // store.dispatch(loadAlbums(JSON.parse(albums)));

//     const photos = Object.assign(localStorage.getItem("photos"));
//     const key = photos.keys(photos);
//     console.log(photos);
//     // for( var key in photos){
//       // store.dispatch(loadPhotos(photos.key, key));
//     // }
//   } catch(e) {
//     store.dispatch(setCurrentUser({}))
//   }
// }
     

const App = () => (
  <Provider store={store}>
    <Router>
      <div  className="onboarding">
        <Navbar/>
        <Main/>
      </div>
    </Router>
  </Provider>
);
export default App;
