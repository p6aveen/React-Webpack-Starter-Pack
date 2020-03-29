import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState((prevState) => ({count: prevState.count + 1}));
  };

  render() {
    return (
      <div>
        <h1>count : {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>
          Increment
        </button>
      </div>
    );
  }
}

export default App;
