import { combineReducers } from 'redux';
import emailReducer from './emailReducer';
import passReducer from './passReducer';
import confirmReducer from './confirmReducer';
import recipeReducer from './recipeReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['email'],
};

const rootReducer = combineReducers({
  email: emailReducer,
  pass: passReducer,
  confirm: confirmReducer,
  recipe: recipeReducer,
});
export default persistReducer(persistConfig, rootReducer);
