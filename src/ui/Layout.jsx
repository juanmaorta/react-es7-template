// Filename: Layout.jsx
import React from 'react';

import Grid from 'ui/Grid';
import Dock from 'ui/Dock';
import Bar from 'ui/Bar';

export default class Layout extends React.Component {

  render() {
    return <div>
      <Dock />
      <Bar />
      <Grid />
    </div>
  }
}
