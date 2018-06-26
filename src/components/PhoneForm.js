import React, { Component } from "react";
import "./PhoneForm.css";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: "",
    sex: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="이름"
          onChange={this.handleChange}
          value={this.state.name}
        />
        <br />
        <input
          name="phone"
          placeholder="전화번호"
          onChange={this.handleChange}
          value={this.state.phone}
        />
        <br />
        <br />
        <button type="submit"> 등록</button>
      </form>
    );
  }
}

export default PhoneForm;
