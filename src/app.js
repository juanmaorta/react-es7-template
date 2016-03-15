import React from 'react';
import ReactDOM from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';
// layout
import Layout from 'ui/Layout';

import { Provider } from 'react-redux';
import store from 'rx/reducers/all';

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>, document.getElementById('application'));
