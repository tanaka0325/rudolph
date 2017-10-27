import React, { Component } from "react";

import DailyReportStore from "./stores/DailyReportStore";
import TaskList from "./components/TaskList";
import Report from "./components/Report";
import Header from "./components/Header";

const store = new DailyReportStore();

class App extends Component {
  render() {
    return [
      <Header key="header" />,
      <main key="main" className="container">
        <TaskList store={store} />
        <Report store={store} />
      </main>
    ];
  }
}

export default App;
