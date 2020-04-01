import { register, login } from '../services/auth.service';
import { successActionCreator, errorActionCreator, clearActionCreator } from './alert.actions';

function registerActionCreator(data) {
  return {
    type: 'CREATE_USER',
    payload: data,
  };
}

function loginActionCreator(data) {
  return {
    type: 'LOGIN',
    payload: data,
  };
}

function logoutActionCreator() {
  return {
    type: 'LOGOUT',
    payload: null,
  };
}

export function registerAction(user) {
  return (dispatch) => {
    register(user)
      .then(response => {
        dispatch(registerActionCreator(response.data));
        dispatch(clearActionCreator());
        dispatch(successActionCreator('User successfully registered'));
      })
      .catch(() => {
        dispatch(clearActionCreator());
        dispatch(errorActionCreator('User registration failed'));
      });
  };
}

export function loginAction(user) {
  return (dispatch) => {
    login(user)
    .then(response => {
      localStorage.setItem('user', JSON.stringify(response.data));
      dispatch(loginActionCreator(response.data));
      dispatch(clearActionCreator());
      dispatch(successActionCreator('Successfuly login'));
    })
    .catch(() => {
      dispatch(clearActionCreator());
      dispatch(errorActionCreator('Login failed'));
    });
  };
}

export function logoutAction() {
  return (dispatch) => {
    localStorage.removeItem('user');
    dispatch(logoutActionCreator());
    dispatch(clearActionCreator());
    dispatch(successActionCreator('Successfuly logout'));
  };
}
