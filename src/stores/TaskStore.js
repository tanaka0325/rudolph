import { observable } from "mobx";

const generate = require("nanoid/generate");
const url = require("nanoid/url");

class TaskStore {
  id = generate(url, 12);
  @observable title;

  constructor(title) {
    this.title = title;
  }
}

export default TaskStore;
