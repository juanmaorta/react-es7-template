// Filename: Bar.jsx
import React from 'react';

import AppBar from 'material-ui/lib/app-bar';
import CartMenu from './menus/Cart';

export default class Bar extends React.Component {
  render() {
    return <AppBar
      title="Title"
      onLeftIconButtonTouchTap={(e) => {this.props.onLeftIconButtonTouchTap(e)}}
      iconElementRight={<CartMenu />} />
  }
}
