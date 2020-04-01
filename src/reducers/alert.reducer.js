export default (state = {}, action) => {
  switch (action.type) {
    case 'SUCCESS_ALERT':
      return {
        ...state,
        successMessage: action.payload,
      };
    case 'ERROR_ALERT':
      return {
        ...state,
        errorMessage: action.payload
      };
    case 'CLEAR_ALERTS':
      return {
        ...state,
        successMessage: action.payload,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};