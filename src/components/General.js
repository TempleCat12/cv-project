import React from "react";
class General extends React.Component {
  constructor() {
    super();
    this.state = {
      myName: "",
      email: "",
      phone: "",
    };
  }

  onChangeInput = (key, e) => {
    this.setState({
      [key]: e.target.value,
    });
  };
  onSubmitForm = (e) => {
    e.preventDefault();

    console.log(this.state);
  };
  render() {
    return (
      <div className="general">
        <h3>General Information</h3>
        <form onSubmit={this.onSubmitForm}>
          <input
            type="text"
            required
            id="name"
            name="myName"
            value={this.state.myName}
            onChange={(e) => this.onChangeInput("myName", e)}
            placeholder='Boe..'
          ></input>
          <input
            type="email"
            required
            id="email"
            name="email"
            value={this.state.email}
            onChange={(e) => this.onChangeInput("email", e)}
            placeholder="hucat@gmail.com"
          ></input>
          <input
            type="text"
            required
            id="phone"
            name="phone"
            value={this.state.phone}
            onChange={(e) => this.onChangeInput("phone", e)}
            pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
            placeholder="134-3219-9876"
          ></input>
          <button hidden type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}
export default General;
