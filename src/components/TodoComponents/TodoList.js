// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
//iterates over data and output <Todo /> for each array element

import React, { Component } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {

  render() {

    return (
      <div className='todoCont'>
        <TodoForm handleClear={this.props.handleClear} handleChange={this.props.handleChange} formData={this.props.formData} handleSubmit={this.props.handleSubmit} />
        {
          this.props.list.map((item) => {
            return (
              <Todo
                toggleCompleted={this.props.toggleCompleted}
                item={item}
                key={Date.now() * Math.random()} />
            )
          })
        }
      </div>
    )//end return
  }//end render
}//end component

export default TodoList;