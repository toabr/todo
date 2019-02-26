import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default function List(props) {

    let todos = props.todos.map((todo,index) => {
      return (
        <li key={index}>
          <Link to={`/todo/${index}`}>{todo}</Link>
          <button onClick={ () => props.deleteTodo(index) }>x</button>
        </li>);
    });

    return(
      <ul>
        {todos}
      </ul>
    );
}
