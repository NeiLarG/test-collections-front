import React, { Component } from 'react';
import {
  Route,
  Switch,
  Redirect,
  Router,
} from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import { clearAction } from '../actions/alert.actions';
import '../styles/App.css';

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
        <Router history={history}>
          <div className="container">
            <header className="container">
              <h1 className="row justify-content-center">Collections</h1>
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
            <main>
              <Switch>
                <Redirect exact from="/" to="/login" />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/login" component={LoginPage} />
              </Switch>
            </main>
          </div>
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
