// Filename: Dock.jsx
import React from 'react';
import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';

import {connect} from "react-redux";
import {Actions} from 'rx/reducers/ui';

class Dock extends React.Component {

  state = {
    open: false
  }

  static propTypes = {
    isOpened: React.PropTypes.bool.isRequired,
    onChangeRequested: React.PropTypes.func.isRequired
  }

  static defaultProps = {
    isOpened: false,
    onChangeRequested: () => {}
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return <LeftNav docked={false}
      open={this.props.isOpened}
      onRequestChange={this.props.onChangeRequested}>
      <MenuItem>Menu Item</MenuItem>
      <MenuItem>Menu Item 2</MenuItem>
    </LeftNav>
  }
}

var mapStateToProps = function(state){
  console.log(state);
	return {isOpened:state.ui.isOpened};
};

var mapDispatchToProps = function(dispatch){
	return {
		onChangeRequested: function(event){
      dispatch({type: Actions.DOCK_BUTTON_PRESSED}, event);
    }
	}
};


export default connect(mapStateToProps, mapDispatchToProps)(Dock);
