import { observable, computed, action } from "mobx";

class DateStore {
  @observable date = new Date();

  @computed
  get localDateString() {
    return this.date.toLocaleDateString();
  }

  @action
  changeDate() {
    this.date = new Date(1962, 6, 7);
  }
}

export default DateStore;
