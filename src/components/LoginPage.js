import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
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
    return (
      <section className="container">
         <Link
            className="col-sm-1"
            to="/register"
          >Register page</Link>
        <form>
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

const mapStateToProps = state => ({
  createdUser: state.auth.createdUser,
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(loginAction(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
