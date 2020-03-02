import { createStore } from 'redux';
import rootReducer from '../reducers';

export default () => {
  const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
};
