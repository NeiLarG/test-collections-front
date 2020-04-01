export function successActionCreator(message) {
  return {
    type: 'SUCCESS_ALERT',
    payload: message,
  };
}

export function errorActionCreator(message) {
  return {
    type: 'ERROR_ALERT',
    payload: message,
  };
}

export function clearActionCreator() {
  return {
    type: 'CLEAR_ALERTS',
    payload: null
  };
}

export function clearAction() {
  return (dispatch) => {
    dispatch(clearActionCreator());
  };
}
