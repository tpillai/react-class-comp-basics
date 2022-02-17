import React, { Component } from 'react';
    
class Forms extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

 /*  onHandleChange = (event) => {
    this.setState({
      firstName: event.target.value,
      lastName: event.target.value,
    });
  }; */

    onHandleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
      
        });
    }
    
  onSubmit = (event) => {
    event.preventDefault();
      console.log(this.state.firstName);
      console.log(this.state.lastName);
  };

  render() {
    return (
      <form action="">
        <h2>Form Component</h2>
        <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.onHandleChange}
        />
        <input
          type="text"
          name="lastName"
          value={this.state.lastName}
          onChange={this.onHandleChange}
        />

        <button onClick={this.onSubmit}> Submit</button>
      </form>
    );
  }
}

export default Forms;
