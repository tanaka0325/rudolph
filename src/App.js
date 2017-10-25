import React, { Component } from "react";

import TaskList from "./components/TaskList";
import TaskListStore from "./stores/TaskListStore";
import DateStore from "./stores/DateStore";

const taskListstore = new TaskListStore();
const dateStore = new DateStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <TaskList store={taskListstore} dateStore={dateStore} />
      </div>
    );
  }
}

export default App;
