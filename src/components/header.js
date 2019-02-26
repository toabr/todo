import React, { Component } from 'react';

export default function Header(props) {
  return(
    <div>
      <h1>todo</h1>
      <input
        type="text"
        name="q"
        placeholder="type your next todo"
        value={props.todo}
        onChange={(e) => props.onInputChange(e)}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            props.saveTodo();
          }
        }}
      />
      <button onClick={props.saveTodo}>save</button>
    </div>
  );
}
