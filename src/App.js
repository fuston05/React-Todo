import React, { Component } from 'react';
import TodoList from './components/TodoComponents/TodoList';

//styles
import './components/TodoComponents/Todo.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [{
        task: 'Kill Bill',
        id: 234234,
        completed: false
      },
      {
        task: 'Kill JT',
        id: 234234233,
        completed: false
      },
      {
        task: 'Poop',
        id: 22983741,
        completed: false
      }
    ],
      formData: '',
      searchTerm: '',
      searchResults: []
    }
  }//end constructor

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.formData !== '') {
      this.setState(prevState => ({
        todos: [
          ...prevState.todos,
          {
            task: this.state.formData,
            id: Date.now(),
            completed: false
          }]
      }))
    }//end if

    //reset formData state, thus resetting the form field
    this.setState({
      formData: ''
    });
  }//end handleSubmit

  handleChange = (e) => {
    // 2 way binding to the text input field to state
    this.setState({
      formData: e.target.value
    });
  }//end handleChange

  toggleCompleted = (id) => {
    const newList = this.state.todos.map((ele) => {
      if (ele.id === id) { //if id clicked on === id of item in state array
        return {
          ...ele,
          completed: !ele.completed //toggle the 'completed' property
        };
      } else {
        return ele; // return the rest untouched that weren't clicked
      }//end if
    });
    //update state to the new edited array
    this.setState({
      todos: newList
    });
  }//end toggelCompleted

  handleClear = (e) => {
    //filter out items that completed === false 
    const newArr = this.state.todos.filter((item) => {
      return (item.completed === false);
    });
    //update state
    this.setState({
      todos: newArr
    });
  }//end handleClear

  searchChange= (e) => {
  this.setState({
    searchTerm: e.target.value
  });

  const results= this.state.todos.filter( (item) =>{ 
     return item.task.toLowerCase().includes( this.state.searchTerm.toLowerCase() )
  } );
    this.setState({
      searchResults: results
    });
    console.log('results: ', results);
  }//end searchChange
  
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='mainCont'>
        <h1>Welcome to your Todo App!</h1> 
        {console.log('todos',this.state.todos)}
        {console.log('searchResults',this.state.searchResults)}
        <span>
          <input 
            onChange= {this.searchChange}
            value= {this.searchTerm}
            type= 'text'
            name= 'search'
            id= 'search'
            placeholder= 'Search'
          />
        </span>

        <TodoList
          handleClear={this.handleClear}
          handleSubmit={this.handleSubmit}
          toggleCompleted={this.toggleCompleted}
          handleChange={this.handleChange}
          formData={this.state.formData}
          searchResults= {this.state.searchResults}
          list={this.state.todos}
        />
      </div>
    ); //end return
  }//end render
}//end component

export default App;
