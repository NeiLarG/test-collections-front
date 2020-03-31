import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { login } from '../services/auth.service';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      successAlertShow: false,
      failAlertShow: false,
    };
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onClickLogin = () => {
    login(this.state)
      .then(() => this.setState({
        successAlertShow: true,
        failAlertShow: false,
      }))
      .catch(() => this.setState({
        successAlertShow: false,
        failAlertShow: true,
      }));
  };

  render() {
    const { successAlertShow, failAlertShow } = this.state;
    return (
      <section className="container">
        <form>
          <Alert key="success" show={successAlertShow} variant="success">
            Login was successful
          </Alert>
          <Alert key="danger" show={failAlertShow} variant="danger">
            Something was wrong.
          </Alert>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input onChange={this.onChangeEmail} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={this.onChangePassword} type="password" className="form-control" id="password" />
          </div>
          <button type="button" onClick={this.onClickLogin} className="btn btn-primary">Login</button>
        </form>
      </section>
    );
  }
}

export default LoginPage;
