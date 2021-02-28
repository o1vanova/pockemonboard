/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {PockemonStore} from './stores/PockemonStore';
import {Provider} from 'mobx-react';
import {View, Text} from 'react-native';

const store = new PockemonStore();

const App = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>Test</Text>
      </View>
    </Provider>
  );
};

export default App;
