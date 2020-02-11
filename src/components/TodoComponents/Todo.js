import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div
        onClick={() => { this.props.toggleCompleted(this.props.item.id) }}
        className={`card${this.props.item.completed ? ' completed' : ''} `}>
        <h2>{this.props.item.task}</h2>
      </div>
    )//end return
  } //end render
}//end component

export default Todo;
