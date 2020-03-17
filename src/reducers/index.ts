import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import emailReducer from './emailReducer';
import passReducer from './passReducer';
import confirmReducer from './confirmReducer';
import recipeReducer from './recipeReducer';
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
};

const rootReducer = combineReducers({
  email: persistReducer(rootPersistConfig, emailReducer),
  pass: passReducer,
  confirm: confirmReducer,
  recipe: recipeReducer,
});
export default rootReducer;
