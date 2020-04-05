import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
    const { auth } = this.props;
    if (auth.loggedInUser) {
      return <Redirect to="/" />
    }
    if (auth.createdUser) {
      return <Redirect to="/login" />
    }
    return (      
      <section className="container">
        <form>
          <div className="form-group">
            <label htmlFor="email">Электронная почта</label>
            <input onChange={this.onChangeEmail} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <input onChange={this.onChangePassword} type="password" className="form-control" id="password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Повторите пароль</label>
            <input onChange={this.onChangeConfirmPassword} type="password" className="form-control" id="confirmPassword" />
          </div>
          <div className="form-group">
            <label htmlFor="nickName">Никнэйм</label>
            <input onChange={this.onChangeNickName} type="text" className="form-control" id="nickName" />
          </div>
          <div className="form-group">
            <label htmlFor="birthDate">Дата день рождения</label>
            <input onChange={this.onChangeBirthDate} type="date" className="form-control" id="birthDate" />
          </div>
         <button type="button" onClick={this.onClickRegister} className="btn btn-primary">Registration</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  register: user => dispatch(registerAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
