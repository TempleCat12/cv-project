import React from "react";
import Portrait from "./Portrait";
import "../style/general.css";
class General extends React.Component {
  constructor() {
    super();
    this.state = {
      myName: "",
      role: "",
      email: "",
      city: "",
      phone: "",
      aboutMe: "",
    };
  }

  onChangeInput = (key, e) => {
    if (key === "aboutMe") {
      const node = e.target;
      node.style.height = "auto";
      node.style.height = node.scrollHeight + "px";
    }
    this.setState({
      [key]: e.target.value,
    });
  };
  onSubmitForm = (e) => {
    e.preventDefault();

    // console.log(this.state);
  };
  render() {
    const aboutMe =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const emailSVG = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>email-variant</title>
        <path d="M12,13L2,6.76V6C2,4.89 2.89,4 4,4H20A2,2 0 0,1 22,6V6.75L12,13M22,18A2,2 0 0,1 20,20H4C2.89,20 2,19.1 2,18V9.11L4,10.36V18H20V10.36L22,9.11V18Z" />
      </svg>
    );
    const citySVG = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>map-marker</title>
        <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
      </svg>
    );
    const phoneSVG = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <title>cellphone</title>
        <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
      </svg>
    );
    return (
      <div className="general">
        <form onSubmit={this.onSubmitForm}>
          {/* left */}
          <div>
            <input
              type="text"
              required
              id="name"
              name="myName"
              value={this.state.myName}
              onChange={(e) => this.onChangeInput("myName", e)}
              placeholder="JOHN DOEMAN"
            ></input>
            <input
              type="text"
              required
              id="role"
              name="myName"
              value={this.state.role}
              onChange={(e) => this.onChangeInput("role", e)}
              placeholder="Software Developer"
            ></input>
          </div>
          {/* right */}
          <div>
            <div className="svg_box">
              <input
                type="text"
                required
                id="city"
                name="city"
                value={this.state.city}
                onChange={(e) => this.onChangeInput("city", e)}
                placeholder="Xian, China"
              ></input>
              {citySVG}
            </div>
            <div className="svg_box">
              <input
                type="email"
                required
                id="email"
                name="email"
                value={this.state.email}
                onChange={(e) => this.onChangeInput("email", e)}
                placeholder="hucat@gmail.com"
              ></input>
              {emailSVG}
            </div>
            <div className="svg_box">
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
              {phoneSVG}
            </div>
          </div>
        </form>
        <Portrait />
        <div>
          <h3>About Me</h3>
          <textarea
            value={this.state.aboutMe}
            placeholder={aboutMe}
            onChange={(e) => this.onChangeInput("aboutMe", e)}
          ></textarea>
        </div>
      </div>
    );
  }
}
export default General;
