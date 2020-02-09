// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
//iterates over data and output <Todo /> for each array element

import React, { Component } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {
  render() {
    return (
      <div className= 'todoCont'>
        <h1>hello from todo list</h1>
        <TodoForm />
        <Todo />
      </div>
    )//end return
  }//end render
}//end component

export default TodoList;