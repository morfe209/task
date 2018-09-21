import React, {Component} from "react";

export default class AuthForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      userId: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props
      .onAuth(this.state.userId)
      .then(() => {
        this.props.history.push("/");
      })
      .catch(() => {
        return;
      })

  }

  render() {
    const {userId} = this.state;
    const {
      heading,
      buttonText, 
      errors, 
      history, 
      removeError
    } = this.props;

    history.listen(() => {
      removeError();
    })

    return(
      <div className="row justify-content-md-center text-center">
        <div className="col-md-6">
          <form onSubmit={this.handleSubmit}>
            <h2>{heading}</h2>
            {errors.message && (
              <div className="alert alert-danger">{errors.message}</div>
            )}
            <label htmlFor="userId">UserId:</label>
            <input 
              className="form-control"
              id="userId"
              name="userId"
              onChange={this.handleChange}
              value={userId}
              type="number"
              min = "0"
            />
          <button type="submit" className="btn btn-primary btn-block btn-lg">
            {buttonText}
          </button>
          </form>
        </div>
      </div>
    )
  }
}
