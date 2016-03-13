// Filename: Dock.jsx
import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

export default class Dock extends React.Component {

  state = {
    open: false
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return <LeftNav docked={false}
      open={this.state.open}
      onRequestChange={this.handleClose}>
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </LeftNav>
  }
}
