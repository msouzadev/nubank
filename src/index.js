import React from 'react';

import '~/config/ReactotronConfig';
import {StatusBar} from 'react-native';
import Routes from '~/routes';

const App = () => (
  <>
    <StatusBar backgroundColor="#8b05be" barStyle="light-content" />
    <Routes />
  </>
);

export default App;
