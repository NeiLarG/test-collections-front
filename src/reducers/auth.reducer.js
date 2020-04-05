export default (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        ...state,
        createdUser: action.payload,
      };
    case 'LOGIN':
      return {
        ...state,
        loggedInUser: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case 'CHECK_LOGIN':
      return {
        ...state,
        loggedInUser: action.payload,
      };
    case 'RESET_REGISTERED_USER':
      return {
        ...state,
        createdUser: action.payload,
      };
    default:
      return state;
  }
};
