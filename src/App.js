import React, { Component } from "react";
import DevTools from "mobx-react-devtools";

class App extends Component {
  render() {
    return (
      <div className="App">
        Hello world
        <DevTools />
      </div>
    );
  }
}

export default App;
