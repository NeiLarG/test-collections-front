import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter,
} from 'react-router-dom';
import RegisterPage from './RegisterPage';
import '../styles/App.css';

const App = history => (
  <>
    <BrowserRouter history={history}>
      <div className="container-fluid">
        <header className="app-header">
          <h1>Collections</h1>
        </header>
        <main>
          <Switch>
            <Redirect exact from="/" to="/register" />
            <Route exact path="/register" component={RegisterPage} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  </>
);

export default App;
