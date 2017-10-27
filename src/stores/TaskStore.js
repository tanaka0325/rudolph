import { observable } from "mobx";

const generate = require("nanoid/generate");
const url = require("nanoid/url");

class TaskStore {
  id;
  created_at;
  @observable title;
  @observable finished;
  @observable star;

  constructor(obj) {
    this.id = obj.id || generate(url, 12);
    this.created_at = obj.created_at || new Date();
    this.title = obj.title || "new task";
    this.finished = obj.finished || false;
    this.star = obj.star || false;
  }
}

export default TaskStore;
