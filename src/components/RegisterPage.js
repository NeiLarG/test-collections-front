import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerAction } from '../actions/auth.actions';

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      nickName: '',
      birthDate: '',
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
    const { register } = this.props;
    register(this.state);
  };

  render() {
    return (      
      <section className="container">
        <form>
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

const mapStateToProps = state => ({
  createdUser: state.auth.createdUser,
});

const mapDispatchToProps = dispatch => ({
  register: user => dispatch(registerAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
