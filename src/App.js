import React, { Component } from "react";

import TaskList from "./components/TaskList";
import TaskListStore from "./stores/TaskListStore";

const store = new TaskListStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskList store={store} />
      </div>
    );
  }
}

export default App;
