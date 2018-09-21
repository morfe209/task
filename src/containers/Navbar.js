import React, {Component} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logout} from "../store/actions/auth";


class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  }
  render(){
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="navbar-header">
            <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/">Albums</Link>  
                </li>
            </ul>
          </div>

          {this.props.currentUser.isAuthenticated ? (
            <ul className="nav navbar-nav navbar-right">
              <li>
                <p>Signed In As: {this.props.currentUser.user.name}</p>
              </li>
{/*              <li>
                <Link to={`users/${this.props.currentUser.user.id}/messages/new`}>New Message</Link>
              </li>*/}
              <li>
                <a onClick={this.logout}>Log out</a>
              </li>
            </ul>
            ) : (
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/signin">Log in</Link>  
                </li>
              </ul>
            )
          }
        </div>
      </nav>
    )
  }
}


function mapStateToProps(state){
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {logout})(Navbar);