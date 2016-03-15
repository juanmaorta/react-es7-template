// Filename: Bar.jsx
import React from 'react';

import AppBar from 'material-ui/lib/app-bar';
import CartMenu from 'ui/menus/Cart';

import {connect} from "react-redux";
import {Actions} from 'rx/reducers/ui';

class Bar extends React.Component {
  static propTypes = {
    onLeftIconTouch: React.PropTypes.func.isRequired
  }
  render() {
    return <AppBar
      title="Title"
      onLeftIconButtonTouchTap={this.props.onLeftIconTouch}
      iconElementRight={<CartMenu />} />;
  }
}

var mapDispatchToProps = function(dispatch){
	return {
		onLeftIconTouch: function(event){
      dispatch({type: Actions.DOCK_BUTTON_PRESSED}, event);
    }
	}
};

export default connect((state) => state, mapDispatchToProps)(Bar);
