import React, { Component } from "react";

import TaskList from "./components/TaskList";
import TaskListStore from "./stores/TaskListStore";
import DateStore from "./stores/DateStore";

const dateStore = new DateStore();
const taskListStore = new TaskListStore(dateStore);

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskList store={taskListStore} />
      </div>
    );
  }
}

export default App;
