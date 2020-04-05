export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_ALL_COLLECTIONS':
      return {
        ...state,
        collections: action.payload,
      };
    case 'DELETE_COLLECTION':
      return {
        ...state,
        collections: state.collections.filter(collection => collection.id != action.payload),
      };
    default:
      return state;
  }
};