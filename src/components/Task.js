import React, { Component } from "react";
import { observer } from "mobx-react";

const Task = observer(({ task }) => (
  <li>
    <input
      type="checkbox"
      checked={task.finished}
      onClick={() => (task.finished = !task.finished)}
    />
    {task.title}
  </li>
));

export default Task;
