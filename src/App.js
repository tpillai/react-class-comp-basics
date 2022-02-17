import React, { Component } from "react";
import "./App.css";
import Todo from "./component/Todo"
import Counter from "./component/Counter"
import Forms from "./component/Forms"
import FormsUC from "./component/FormsUC"
import List from "./component/List"
import MyPureComponent from "./component/MyPureComponent"

class App extends Component {
  state = {
    myString: "Hello",
    myStringOne: "Tejas",
  };

  handleChange = () => {
    this.setState({
      myStringOne: " Vaishu",
    });
  };

  render() {
    return this.newMethod6();
  }

 
  newMethod6() {
    return (
      <div>
        <MyPureComponent />
      </div>
    );
  }

  newMethod5() {
    return (
      <div>
        <List />
      </div>
    );
  }

  newMethod4() {
    return (
      <div>
        <FormsUC />
      </div>
    );
  }

  newMethod3() {
    return (
      <div>
        <Forms />
      </div>
    );
  }

  newMethod2() {
    return (
      <div className="App">
        <h1>Events </h1>
        <Counter />
      </div>
    );
  }

  newMethod1() {
    return (
      <div className="App">
        <h1>{this.state.myString} </h1>
        <button onClick={this.handleChange}>Change Text </button>
        <Todo myStringOne={this.state.myStringOne} />
      </div>
    );
  }
}

export default App;
