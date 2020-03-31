import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import { register } from '../services/auth.service';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      nickName: '',
      birthDate: '',
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

  onChangeConfirmPassword = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };

  onChangeNickName = (event) => {
    this.setState({ nickName: event.target.value });
  };

  onChangeBirthDate = (event) => {
    this.setState({ birthDate: event.target.value });
  };

  onClickRegister = () => {
    register(this.state)
      .then(() => this.setState({
        successAlertShow: true,
        failAlertShow: false,
      }))
      .catch((error) => this.setState({
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
            Registration was successful
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input onChange={this.onChangeConfirmPassword} type="password" className="form-control" id="confirmPassword" />
          </div>
          <div className="form-group">
            <label htmlFor="nickName">Nickname</label>
            <input onChange={this.onChangeNickName} type="text" className="form-control" id="nickName" />
          </div>
          <div className="form-group">
            <label htmlFor="birthDate">Birthdate</label>
            <input onChange={this.onChangeBirthDate} type="date" className="form-control" id="birthDate" />
          </div>
          <button type="button" onClick={this.onClickRegister} className="btn btn-primary">Registration</button>
        </form>
      </section>
    );
  }
}

export default RegisterPage;
