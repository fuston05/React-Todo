//holds Form, Add Todo and Clear Completed buttons, Submit button

import React, { Component } from 'react';

export default class TodoForm extends Component {

  render() {
    return (
      <div>
        <form onSubmit= {this.props.handleSubmit}>

          <label> Add Task
            <input 
            onChange= { this.props.handleChange} 
            name= 'task'
            type= 'text' 
            placeholder= 'Task'
            value= {this.props.formData} 
            />
          </label>

          <button type= 'submit'>Submit</button>
        </form>
      </div>
    )
  }
}
