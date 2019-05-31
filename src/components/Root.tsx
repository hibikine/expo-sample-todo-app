import * as React from 'react';
import { Provider } from 'react-redux';
import storeCreator from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import Main from './Main';

const [store, persistor] = storeCreator();
persistor.purge();

export default () => (
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <Main />
    </Provider>
  </PersistGate>
);
