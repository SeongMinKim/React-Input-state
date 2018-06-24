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

  render() {
    return (
      <form>
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
        <input
          name="sex"
          placeholder="성별"
          onChange={this.handleChange}
          value={this.state.sex}
        />
        <br />
        <div>
          {this.state.name}
          <br />
          {this.state.phone}
          <br />
          {this.state.sex}
          <br />
        </div>
      </form>
    );
  }
}

export default PhoneForm;
