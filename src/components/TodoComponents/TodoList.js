// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
//iterates over data and output <Todo /> for each array element

import React, { Component } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

class TodoList extends Component {

  render(props) {
    
    return (
      <div className= 'todoCont'>
        <TodoForm />
        {
          this.props.list.map( (item) => {
            return(
              <Todo completed= {item.completed} key= {Date.now()*Math.random()} title= {item.task} />
            )
          }) 
        }
        {/* {console.log(this.props.list)} */}
        
      </div>
    )//end return
  }//end render
}//end component

export default TodoList;