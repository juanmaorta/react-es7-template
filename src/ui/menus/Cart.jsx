// Filename: Cart.jsx
import React from 'react';

import Badge from 'material-ui/lib/badge';
import IconMenu from 'material-ui/lib/menus/icon-menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import FontIcon from 'material-ui/lib/font-icon';
import NotificationsIcon from 'material-ui/lib/svg-icons/social/notifications';

class CartItem extends React.Component {
  state = {
    title: '',
    price: 0,
    total: 0
  }
}

export default class CartMenu extends React.Component {

  state = {
    items: []
  }

  addItem(item) {
    let items = this.getState('items');
    items.push(item);
    this.setState({items:items});
  }

  getItemCount() {
    return this.state.items.length;
  }

  getTotalSpent() {
    let total = 0;
    this.state.items.map( (item) => total += item.total );
    return total;
  }

  render() {
    return <IconMenu
      iconButtonElement={
        <Badge
          badgeContent={this.getItemCount()}
          secondary={true}
          badgeStyle={{left:-8, top:-8,opacity:.6, background:"purple"}}
          style={{padding:0}}
         >
         <RaisedButton
           label={`Total: ${this.getTotalSpent()} €`}
           secondary={true}
           icon={<FontIcon className="material-icons">shopping_cart</FontIcon>}
         />
        </Badge>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        {this.state.items.map ( (item) => {
          <MenuItem primaryText={item.state.title} />
        })}
    </IconMenu>
  }
}
