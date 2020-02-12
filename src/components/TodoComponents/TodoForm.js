//holds Form, Add Todo and Clear Completed buttons, Submit button

import React, { Component } from 'react';

export default class TodoForm extends Component {

  render() {
    return (
      <div className='formCont'>
        <form onSubmit={(e) => { this.props.handleSubmit(e) }}>

          <label htmlFor='task'> Add Task: </label>
          <input
            onChange={this.props.handleChange}
            name='task'
            id='task'
            type='text'
            placeholder='Task'
            value={this.props.formData}
          />
          <br />
          <div className='buttonCont'>
            <button type='submit'>Submit</button>
            <button type='button' onClick={this.props.handleClear}>Clear Completed</button>
          </div>
        </form>
      </div>
    )
  }
}
