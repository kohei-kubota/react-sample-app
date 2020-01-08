import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return (
      <li className='todo-list-item'>{this.props.data.label}</li>
    )
  }
}

export default ListItem;