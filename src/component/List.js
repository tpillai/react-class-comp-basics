import React, { Component } from "react";

export default class List extends Component {
  state = {
    score: 5,
    data: [
      {
        id: 1,
        name: "Ram",
        age: 23,
      },
      {
        id: 2,
        name: "Sam",
        age: 30,
      },
    ],
  };

  componentDidMount() {
    console.log("runiing...")
   
  }
  
  componentWillUnmount() {
     console.log("exit");
  }

  incrementScore = () => {
    this.setState({
      score: 10
    })
  }

  render() {
    console.log(this.state.score);
    return (
      <div>
        <button onClick={this.incrementScore}> score</button>
        {"use {}  with return . only 1 parent tag allowed inside return"}
        <ul>
          {this.state.data.map((value, index) => {
            return (
              <li key={index}>
                {value.id} - {value.name} - {value.age}
              </li>
            );
          })}
        </ul>
        <hr />
        {
          "use () without return .only 1 parent tag allowed (). use div for multiple tag"
        }
        <ul>
          {this.state.data.map((value, index) => (
            <div key={index}>
              <li>
                {value.id} - {value.name} - {value.age}
              </li>
              <h2>Hi {value.name}</h2>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
