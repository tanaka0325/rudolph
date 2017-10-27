import { observable, action, toJS } from "mobx";

import firestoreClient from "../firebase/firestoreClient";
import TaskStore from "./TaskStore";

class TaskListStore {
  dailyReportStore;
  db;
  @observable tasks = [];

  constructor(dailyReportStore) {
    this.dailyReportStore = dailyReportStore;
    this.db = new firestoreClient("tasks");
    this.fetch(dailyReportStore.dateStore.formatedDate);
  }

  @action
  async addTask(title) {
    const task = new TaskStore({ title });
    this.tasks.unshift(task);
    const docRef = await this.db.add(
      this.dailyReportStore.dateStore.formatedDate,
      toJS(task)
    );
    console.debug(docRef);
  }

  @action
  async fetch(date) {
    this.tasks = [];
    const qs = await this.db.fetch(date);
    qs.forEach(doc => {
      this.tasks.push(new TaskStore(doc.data()));
    });
  }
}

export default TaskListStore;
