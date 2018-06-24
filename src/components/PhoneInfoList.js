import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  render() {
    const { data, onRemove } = this.props;

    const list = data.map(info => (
      <PhoneInfo onRemove={onRemove} info={info} key={info.id} />
    ));

    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
