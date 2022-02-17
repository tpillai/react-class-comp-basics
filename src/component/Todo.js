
import React, { Component } from 'react'

 class Todo extends Component {

  render() {
    return (
      <div>
        <h1>Todo..</h1>
        <h2>{this.props.myStringOne}</h2>
      </div>
    );
  }
}
export default Todo;