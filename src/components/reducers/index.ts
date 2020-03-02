import { combineReducers } from 'redux';
import emailReducer from './emailReducer';
import passReducer from './passReducer';
import confirmReducer from './confirmReducer';

const rootReducer = combineReducers({
  email: emailReducer,
  pass: passReducer,
  confirm: confirmReducer,
});
export default rootReducer;
