import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

@observer
class Report extends Component {
  @observable newText = "";

  handleOnChange = e => {
    this.newText = e.target.value;
  };

  @action
  handleOnSubmit = e => {
    e.preventDefault();
    if (this.newText !== "") {
      console.debug("post report");
      this.newText = "";
    }
  };

  render() {
    return (
      <div>
        <h2>Report</h2>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            Name:
            <textarea value={this.newText} onChange={this.handleOnChange} />
          </label>
          <button type="submit">send</button>
        </form>{" "}
      </div>
    );
  }
}

export default Report;
