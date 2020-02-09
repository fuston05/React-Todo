import React, { Component } from 'react';


// card like component??

class Todo extends Component {
  render(props) {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{`Completed: ${this.props.completed}`}</p>
      </div>
    )//end return
  } //end render
}//end component

export default Todo;
