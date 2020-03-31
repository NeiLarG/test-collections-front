import React, { Component } from 'react';
import {
  Route,
  Link,
  Switch,
  Redirect,
  BrowserRouter,
} from 'react-router-dom';
import RegisterPage from './RegisterPage';
import LoginPage from './LoginPage';
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthentificate: false,
    };
  }

  componentDidMount() {
    this.setState({
      isAuthentificate: localStorage.getItem('user') ? true : false
    });
  }

  onClickLogout = () => {
    localStorage.removeItem('user');
    this.setState({ isAuthentificate: false });
  };

  render() {
    const { history } = this.props;
    const { isAuthentificate } = this.state;
    return (
      <>
        <BrowserRouter history={history}>
          <div className="container">
            <header className="container">
              <h1 className="row justify-content-center">Collections</h1>
              <section className="row justify-content-center">
                <Link
                  className="col-sm-1"
                  to="/login"
                  style={{ display: isAuthentificate ? 'none' : 'block' }}
                >
                  <button type="button" className="btn btn-outline-dark">Login page</button>
                </Link>
                <Link
                  className="col-sm-1"
                  to="/register"
                  style={{ display: isAuthentificate ? 'none' : 'block' }}
                >
                  <button type="button" className="btn btn-outline-dark">Register page</button>
                </Link>
                <button
                  type="button"
                  onClick={this.onClickLogout}
                  className="col-sm-1 btn btn-outline-dark"
                  style={{ display: isAuthentificate ? 'block' : 'none' }}>
                    Logout
                </button>
              </section>
            </header>
            <main>
              <Switch>
                <Redirect exact from="/" to="/login" />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/login" component={LoginPage} />
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
