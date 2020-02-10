import React, { Component } from 'react';

class Todo extends Component {
  render() {

    return (
      <div className= 'itemCard'>
        <h1>{this.props.title}</h1>
        { // if there's no title set then don't display this input
          //conditional rendering
          this.props.title && <label> Completed
          <input
              type='checkbox'
              name='completed' />
          </label>
        }

      </div>
    )//end return
  } //end render
}//end component

export default Todo;
