import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authReducer from './auth.reducer';
import alertReducer from './alert.reducer';

export default history => combineReducers({
  router: connectRouter(history),
  auth: authReducer,
  alert: alertReducer,
});