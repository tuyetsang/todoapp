import React from "react";

class ButtonEdit extends React.Component {
  constructor(props) {
    super(props);
    this.edit = this.edit.bind(this);
  }

  edit() {
    this.props.click(this.props.data.key, this.props.data.text);
  }

  render() {
    return (
      <button onClick={this.edit} class="btn btn-info">Edit</button>
    );
  }
}

export default ButtonEdit;
