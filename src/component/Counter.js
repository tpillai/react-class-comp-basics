import React, { Component } from 'react';

class Counter extends Component {
  /*    constructor(props) {
        super(props);
        this.firstClick = this.firstClick.bind(this);
    }

 firstClick() {
    console.log("Running...")
  } */
    
    state = {
        counter: 0
    }

  firstClick=()=> {
    console.log("Running...");
  }
   
    onIncrement = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    onDecrement = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    } 

  
  render() {
    return (
      <div>
        <h2>Counter Component</h2>
        <button onClick={this.firstClick}> Click Me</button>
            <hr>
            </hr>
        <h4> {this.state.counter}</h4>
        <button onClick={this.onIncrement}> + </button>
        <button onClick={this.onDecrement}> - </button>
      </div>
    );
  }
}

export default Counter;