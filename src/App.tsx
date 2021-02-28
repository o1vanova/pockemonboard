/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';

import {PockemonStore} from './stores/PockemonStore';
import {Provider} from 'mobx-react';
import AppNavigation from './navigation/AppNavigation';

const App = () => {
  const store = new PockemonStore();

  useEffect(() => {
    const init = async () => {
      store.initialize();
    };

    init().finally(async () => {
      console.log('The future loader has been hidden successfully');
    });
  }, [store]);

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
