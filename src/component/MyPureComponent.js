import React, {  PureComponent } from "react";

export default class MyPureComponent extends PureComponent {
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
    console.log("runiing...");
  }

  componentWillUnmount() {
    console.log("exit");
  }

  incrementScore = () => {
    this.setState({
      score: 10,
    });
  };

  render() {
    console.log(this.state.score);
    return (
      <div>
        <button onClick={this.incrementScore}> score</button>

        <ul>
          {this.state.data.map((value, index) => {
            return (
              <li key={index}>
                {value.id} - {value.name} - {value.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
