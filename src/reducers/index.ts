import { combineReducers } from 'redux';
import emailReducer from './emailReducer';
import passReducer from './passReducer';
import confirmReducer from './confirmReducer';
import recipeReducer from './recipeReducer';

const rootReducer = combineReducers({
  email: emailReducer,
  pass: passReducer,
  confirm: confirmReducer,
  recipe: recipeReducer,
});
export default rootReducer;
