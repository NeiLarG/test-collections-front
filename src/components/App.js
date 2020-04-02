import React, { Component } from 'react';
import {
  Route,
  Switch,
  Router,
} from 'react-router-dom';
import {
  Navbar,
  Nav, 
  Container, 
} from "react-bootstrap";
import logo from './logo.png'
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { clearAction } from '../actions/alert.actions';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './HomePage'
import Register from './RegisterPage'
import Login from './LoginPage'

class App extends Component {
  constructor(props) {
    super(props);
    const { history, clear } = this.props;
    history.listen(() => {
      clear();
    });
  }

  render() {
    const { history, alert } = this.props;
    return (
      <>     
        <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
          <Container>
           <Navbar.Brand href="/" >
              <img 
               src={logo}
               height="30"
               width="30"
                className="d-inline-block align-top"
               alt="Logo"
              /> Collections
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
               <Nav.Link href ="/"> Главная </Nav.Link>
               <Nav.Link href ="/register"> Регистрация </Nav.Link>
               <Nav.Link href ="/login"> Логин </Nav.Link>
              </Nav>
           </Navbar.Collapse>
          </Container>
        </Navbar> 

        <Router history={history}>
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
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
        </Switch>
        </Router>
      </>
    );
  }
}

const mapStateToProps = state => ({
  alert: state.alert,
});

const mapDispatchToProps = dispatch => ({
  clear: user => dispatch(clearAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
