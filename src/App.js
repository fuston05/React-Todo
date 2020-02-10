import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';
//styles
import './components/TodoComponents/Todo.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      formData: ''
    }
  }//end constructor

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState(prevState => ({
      todos: [
        ...prevState.todos,
        {
          task: this.state.formData,
          id: Date.now(),
          completed: false
        }]
    }))

    //reset from
    this.setState({
      formData: ''
    });
  }//end handleSubmit

  handleChange = (e) => {
    console.log('targetValue: ', e.target.value);
    this.setState({
      formData: e.target.value
    });
  }//end handleChange

  toggleCompleted= (id) => {
    console.log('from toggelCompleted');
    const newList= this.state.todos.map( (ele) =>{
      if( ele.id === id ){
        return {
          ...ele,
          completed: !ele.completed
        };
      }else{//end if
        return ele;
      }
    } );
    //update state
    this.setState( {
      todos: newList
    } );
  }//end toggelCompleted

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='mainCont'>
        <h2>Welcome to your Todo App!</h2>

        <p>{this.state.todos.task}</p>

        <TodoList 
          handleSubmit= {this.handleSubmit} 
          toggleCompleted= {this.toggleCompleted} 
          handleChange= {this.handleChange} 
          formData= {this.state.formData}  
          list={ this.state.todos} 
        />
      </div>
    ); //end return
  }//end render
}//end component

export default App;
