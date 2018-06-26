import React, { Component, Fragment } from "react";

class PhoneInfo extends Component {
  state = {
    editing: false,
    name : "",
    phone : ""
  };

  handleToggleEdit = () => {
    this.setState({
      editing: !this.state.editing
    });
  };

 handleChange = (e) =>{
   this.setState({
     [e.target.name]: e.target.value
   })
 }

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  };

  render() {
    const { name, phone, sex } = this.props.info;
    const { editing } = this.state.editing;
   
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "5px"
    };

    return (
      <div style={style}>
       {
        editing ? (
          <Fragement>
            <div><input onChange={this.handleChange} value={this.state.name}/></div>
            <div><input onChange={this.handleChange value={this.state.phone}/></div>
          </Fragement>
        ):(
        <Fragment>
          <div>{name}</div>
          <div>{phone}</div>
        </Fragment>
        )
      }
        <button onClick={this.handleRemove}>삭제</button>
        <button onClick={this.handleToggleEdit}>수정</button>
    )
  }
}

export default PhoneInfo;
