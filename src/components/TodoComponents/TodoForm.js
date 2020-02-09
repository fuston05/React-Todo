//holds Form, Add Todo and Clear Completed buttons, Submit button

import React, { Component } from 'react';

export default class TodoForm extends Component {
  render() {
    return (
      <div>
        <form onSubmit= {(e) => {
          e.preventDefault();
        }}>
          <label> Add Todo
            <input type= 'text' placeholder= 'Add Todo' />
          </label>
          <label> Completed
            <input type= 'checkbox' name= 'completed' />
          </label>
          <button onClick= { (e) => {
            e.preventDefault();
            console.log('submitted!');
          } } type= 'submit'>Submit</button>
          <button onClick= {(e) => { e.preventDefault();console.log('cleared!');}}>Clear Completed</button>
        </form>
      </div>
    )
  }
}
