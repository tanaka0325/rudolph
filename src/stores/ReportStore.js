import { observable, action, toJS } from "mobx";

const generate = require("nanoid/generate");
const url = require("nanoid/url");

class ReportStore {
  dateStore;

  id = generate(url, 12);
  @observable text = "";

  constructor(dateStore) {
    this.dateStore = dateStore;
  }

  @action
  addReport() {
    const report = {
      id: this.id,
      text: this.text
    };
    console.debug(report);
  }
}

export default ReportStore;
