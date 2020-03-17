import { createStore, compose } from 'redux';
import rootReducer from '../reducers';
import { persistStore } from 'redux-persist';

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
);
// @ts-ignore
export const persistor = persistStore(store);

export default { store, persistor };
