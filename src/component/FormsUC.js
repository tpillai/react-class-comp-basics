import React, { Component } from 'react';
    
class FormsUC extends Component {
  constructor(props) {
    super(props);
    
    this.inputOne = React.createRef();
    this.inputTwo = React.createRef();
  }

  onHandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.inputOne.value);
    console.log(this.inputTwo.value);
  };

  render() {
    return (
      <form action="">
        <h2>Form Uncontrolled Component</h2>
        <input
          type="text"
          name="firstName"
          ref={(input) => (this.inputOne = input)}
        />
        <input
          type="text"
          name="lastName"
          ref={(input) => (this.inputTwo = input)}
        />

        <button onClick={this.onSubmit}> Submit</button>
      </form>
    );
  }
}

export default FormsUC;
