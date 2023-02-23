import React from "react";

class Educational extends React.Component {
  constructor() {
    super();
    this.state = {
      schoolName: "",
      major: "",
      date: "",
      degree: "",
    };
  }

  onChangeInput = (key, e) => {
    this.setState({
      [key]: e.target.value,
    });
  };
  onSubmitForm = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h3>Educational Experience</h3>
        <form onSubmit={this.onSubmitForm}>
          <div>
            <label>School: </label>
            <input
              id="schoolName"
              type="text"
              name="schoolName"
              value={this.state.schoolName}
              onChange={(e) => {
                this.onChangeInput("schoolName", e);
              }}
              required
              placeholder="school name"
            ></input>
          </div>
          <div>
            <label>Major: </label>
            <input
              id="major"
              type="text"
              name="major"
              value={this.state.major}
              onChange={(e) => {
                this.onChangeInput("major", e);
              }}
              required
              placeholder="your major"
            ></input>
          </div>
          <div>
            <label>Degree: </label>
            <input
              id="degree"
              type="text"
              name="degree"
              value={this.state.degree}
              onChange={(e) => {
                this.onChangeInput("degree", e);
              }}
              required
              placeholder="degree"
            ></input>
          </div>
          <div>
            <label>Date: </label>
            <input
              id="date"
              type="text"
              name="date"
              value={this.state.date}
              onChange={(e) => {
                this.onChangeInput("date", e);
              }}
              // pattern='[0,9]{4}-[0,1]{1}[0,9]{1}-[0,3]{1}[0,9]{1}'
              required
              placeholder="2015-2019"
            ></input>
          </div>
          <button type="submit" hidden></button>
        </form>
      </div>
    );
  }
}
export default Educational;
