import { observable, action } from "mobx";
import moment from "moment";

class DateStore {
  date = moment().locale("ja");
  format = "YYYY-MM-DD";
  @observable formatedDate;

  constructor() {
    this.formatedDate = this.date.format(this.format);
  }

  @action
  changeDate(days) {
    this.date.add(days, "days");
    this.formatedDate = this.date.format(this.format);
  }
}

export default DateStore;
