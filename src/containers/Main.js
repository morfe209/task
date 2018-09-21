import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import {connect} from "react-redux";
import AuthForm from "../components/AuthForm";
import {authUser} from "../store/actions/auth";
import {removeError} from "../store/actions/errors"
import AlbumList from "./AlbumList";
import PhotoList from "./PhotoList";

// currentUser={currentUser} {...props}

const Main = props => {
  const {authUser, errors, removeError, currentUser} = props;
  return(
    <div className="container">
      <Switch>
        <Route exact path="/" render={props => (
          !currentUser.isAuthenticated ? (
            <Redirect to="/signin"/>
          ) : (
            <AlbumList/>
          )
        )}/>

        <Route 
          exact
          path="/signin" 
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors} 
                onAuth={authUser} 
                buttonText="Log in" 
                heading="Welcome Back." 
                {...props}
              />
            )
          }}
        />
        <Route 

          path="/albums/:albumIndex/photos" 
          render={props => {
            // console.log(props)
            const albumIndex = +props.match.params.albumIndex;
            return (
              <PhotoList
                albumIndex = {albumIndex}
                {...props}
              />
            )
          }}
        />
      </Switch>
    </div>
  )
}

function mapStateToProps(state){
  return {
    currentUser: state.currentUser,
    errors: state.errors
  }
}
export default withRouter(connect(mapStateToProps, {authUser, removeError})(Main));