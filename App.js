import React from 'react';
import {Provider} from 'react-redux';
import StackNavigations from './src/navigation/stack';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigations />
    </Provider>
  );
};

export default App;
