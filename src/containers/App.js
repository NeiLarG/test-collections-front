import React, { Component } from 'react';
import {
  Route,
  Switch,
  Router,
  Link,
} from 'react-router-dom';
import {
  Navbar,
  Nav, 
  Container, 
} from "react-bootstrap";
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { clearAction } from '../actions/alert.actions';
import { logoutAction, checkLoginAction, resetRegisteredUserAction } from '../actions/auth.actions';
import '../styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './HomePage'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'

class App extends Component {
  constructor(props) {
    super(props);
    const { history, clear, checkLogin, resetRegisteredUser } = this.props;
    history.listen(() => {
      resetRegisteredUser();
      clear();
    });
    checkLogin();
  }

  onClickLogout = () => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const { history, alert, auth } = this.props;
    return (
      <>     
        <Router history={history}>
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
          <Container>
           <Navbar.Brand>
              <img 
               src="/images/logo.png"
               height="30"
               width="30"
               className="d-inline-block align-top"
               alt=""
              /> Collections
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Link className="nav-link" to="/">Главная</Link>
                {!auth.loggedInUser ?
                  <>
                    <Link className="nav-link" to="/register">Регистрация</Link>
                    <Link className="nav-link" to="/login">Логин</Link>
                  </>
                :
                <>
                  <Nav.Link>[{auth.loggedInUser.account.email}] -> </Nav.Link>
                  <Nav.Link onClick={this.onClickLogout}>Выйти</Nav.Link>
                </>
                }
              </Nav>
           </Navbar.Collapse>
          </Container>
        </Navbar> 
          <div className="container">
            <header className="container">
              {alert.successMessage &&
                <Alert key="success" variant="success">
                  {alert.successMessage}
                </Alert>
              }
              {alert.errorMessage &&
                <Alert key="danger" variant="danger">
                  {alert.errorMessage}
                </Alert>
              }
            </header>            
          </div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/login" component={LoginPage} />
        </Switch>
        </Router>
      </>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  alert: state.alert,
});

const mapDispatchToProps = dispatch => ({
  clear: () => dispatch(clearAction()),
  logout: () => dispatch(logoutAction()),
  checkLogin: () => dispatch(checkLoginAction()),
  resetRegisteredUser: () => dispatch(resetRegisteredUserAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
