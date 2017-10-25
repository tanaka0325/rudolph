import { observable, computed } from "mobx";

class DateStore {
  @observable date = new Date();

  @computed
  get localDateString() {
    return this.date.toLocaleDateString();
  }
}

export default DateStore;
