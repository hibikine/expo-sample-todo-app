import { createStore, Store } from 'redux';
import reducer from './reducers';
import { persistReducer, persistStore, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = { key: 'root', storage };
export default (): [Store, Persistor] => {
  const store = createStore(persistReducer(persistConfig, reducer));
  return [store, persistStore(store)];
};
