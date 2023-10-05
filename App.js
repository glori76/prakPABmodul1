//import react dan component
import React, { Component } from 'react';

class ClassCounter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  //event handler untuk menambah dan mengurangi count
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <h1>Pengenalan React Tingkat Dasar</h1>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.decrementCounter}>-1</button>
        <button onClick={this.incrementCounter}>+1</button>
      </div>
    );
  }
}

export default ClassCounter;

