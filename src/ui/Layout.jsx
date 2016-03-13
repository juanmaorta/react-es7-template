// Filename: Layout.jsx
import React from 'react';

import Dock from './Dock';
import Bar from './Bar';

export default class Layout extends React.Component {

  toggleDock = (e) => {
    this.dock.handleToggle(e);
  }

  render() {
    return <div>
      <Dock ref={(d) => this.dock = d} />
      <Bar onLeftIconButtonTouchTap={this.toggleDock} />
    </div>
  }
}
