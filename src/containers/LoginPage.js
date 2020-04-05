import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginAction } from '../actions/auth.actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  onClickLogin = () => {
    const { login } = this.props;
    login(this.state);
  };

  render() {
    const { auth } = this.props;
    if (auth.loggedInUser) {
      return <Redirect to="/" />
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
          <button type="button" onClick={this.onClickLogin} className="btn btn-primary">Login</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
