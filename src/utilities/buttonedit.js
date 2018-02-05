import React from "react";

class ButtonEdit extends React.Component {
  constructor(props) {
    super(props);
    this.sukien = this.sukien.bind(this);
  }

  sukien() {
      this.props.click(this.props.data);
  }


  render() {
    return (
      <button onClick={this.sukien} className="btn btn-info">{this.props.value}</button>
    );
  }
}

export default ButtonEdit;
