import React, { Component } from "react";

import DateStore from "./stores/DateStore";
import TaskList from "./components/TaskList";
import TaskListStore from "./stores/TaskListStore";
import Report from "./components/Report";
import ReportStore from "./stores/ReportStore";
import Header from "./components/Header";

const dateStore = new DateStore();
const taskListStore = new TaskListStore(dateStore);
const reportStore = new ReportStore(dateStore);

class App extends Component {
  render() {
    return [
      <Header key="header" />,
      <main key="main" className="container">
        <TaskList store={taskListStore} />
        <Report store={reportStore} />
      </main>
    ];
  }
}

export default App;
