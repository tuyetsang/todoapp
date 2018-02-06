import React from "react";

class ButtonDelete extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
      this.props.click(this.props.data);
  }

  render() {
    return (
      <button onClick={this.delete} class="btn btn-danger">Delete</button>
    );
  }
}

export default ButtonDelete;
