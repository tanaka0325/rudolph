import { observable, action } from "mobx";
import moment from "moment";

class DateStore {
  date = moment().locale("ja");
  @observable formatedDate = this.date.format("YYYY/MM/DD");

  @action
  changeDate(days) {
    this.date.add(days, "days");
    this.formatedDate = this.date.format("YYYY/MM/DD");
  }
}

export default DateStore;
