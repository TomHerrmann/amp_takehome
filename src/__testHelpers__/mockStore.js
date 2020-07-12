import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import defaultStore from './storeFixture';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore(defaultStore);

export function createStore(state) {
  return configureStore(middlewares)(state);
}

export default store;
