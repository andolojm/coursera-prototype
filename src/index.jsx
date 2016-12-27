import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './reducer';
import TabbedPage from './components/tabbedpage';

const App = () => (
  <Provider store={store}>
    <TabbedPage />
  </Provider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
