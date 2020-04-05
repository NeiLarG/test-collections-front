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

function checkLoginActionCreator(data) {
  return {
    type: 'CHECK_LOGIN',
    payload: data,
  };
}

function resetRegisteredUserActionCreator() {
  return {
    type: 'RESET_REGISTERED_USER',
    payload: null,
  };
}

export function registerAction(user) {
  return (dispatch) => {
    register(user)
      .then(response => {
        dispatch(registerActionCreator(response.data));
        dispatch(clearActionCreator());
        dispatch(successActionCreator('Пользователь успешно зарегистрирован'));
      })
      .catch(() => {
        dispatch(clearActionCreator());
        dispatch(errorActionCreator('Ошибка регистрации'));
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
    })
    .catch(() => {
      dispatch(clearActionCreator());
      dispatch(errorActionCreator('Ошибка входа'));
    });
  };
}

export function logoutAction() {
  return (dispatch) => {
    localStorage.removeItem('user');
    dispatch(logoutActionCreator());
    dispatch(clearActionCreator());
  };
}

export function checkLoginAction() {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem('user'));
    dispatch(checkLoginActionCreator(user));
    dispatch(clearActionCreator());
  };
}

export function resetRegisteredUserAction() {
  return (dispatch) => {
    dispatch(resetRegisteredUserActionCreator());
  };
}
