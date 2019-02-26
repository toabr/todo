import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/header.js';
import List from './components/list.js';

import './App.css';

class App extends Component {
  state = {
    todo: 'testing',
    todos: ['eat','sleep','design']
  }

  onInputChange = (e) => {
    let todo = e.target.value;
    this.setState({ todo:todo });
    console.log('inputChange');
  }

  saveTodo = () => {
    let todo = this.state.todo;
    if(todo === '') {
      alert('todo is empty!');
    } else {
      let todos = this.state.todos;
      todos.push(todo);
      this.setState({ todos });
      this.setState({ todo:'' });

      console.log('saveTodo', todo);
    }
  }

  deleteTodo = (index) => {
    let todos = this.state.todos;
    todos.splice(index, 1);
    this.setState({ todos:todos });
    console.log('deleteTodo @', index);
  }

  render() {
    return (
      <Router basename={'/'}>
          <div className="App">

            <Route exact path="/" render={ () => (
              <div>
                <Header className="App-header" todo={this.state.todo} saveTodo={this.saveTodo} onInputChange={this.onInputChange} />
                <List todos={this.state.todos} deleteTodo={this.deleteTodo} />
              </div>
            )}/>

            <Route path={`/todo/:id`} render={ (props) => (
                <h1>todo: {this.state.todos[props.match.params.id]}</h1>
            )}/>

          </div>
      </Router>
    );
  }
}

export default App;
