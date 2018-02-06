
import React from "react";
import FlipMove from 'react-flip-move';
import Modal from 'react-modal';
import {customStyles} from "./../../constants/const";
import ButtonEdit from "./../../components/button/buttonEdit";
import ButtonDelete from "./../../components/button/buttonDelete";

class TodoItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen : false,
      todoKey: "",
      todoText: "",
    };
    this.delete = this.delete.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.edit = this.edit.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.editCurent = this.editCurent.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  };

  updateStatus(key) {
    this.props.updateStatus(key);
  };

  show(key){
    this.props.show(key);
  };

  // change value in input
  handleChange(event) {
    this.setState({todoText: event.target.value});
  };

  // open modal
  edit(key, text) {
    this.setState({todoKey: key, todoText: text});
    this.openModal();
  };

  //edit from old value to new value
  editCurent(){
    var key = this.state.todoKey;
    var newtext = this.state.todoText;

    if(newtext != null){
      this.props.edit(key, newtext);
    }

    this.closeModal();
  };

  //status modal
  closeModal(){
    this.setState({modalIsOpen : false});
  };

  openModal(){
    this.setState({modalIsOpen : true});
  }

  render() {
    var todoEntries = this.props.list;
    //foreach pass element and create html
    var listItems = todoEntries.map((item) =>
      <div class={!item.done ? "listRow" : "listRowDone"} onClick={() => this.updateStatus(item.key)}>
        <li>
          <div class={!item.done ? "newItem" : "doneItem"}>{item.text}</div>
          <ButtonEdit click={this.edit} data={item}/>
          <ButtonDelete click={this.delete} data={item.key}/>
          <div class={!item.done ? "viewdate" : "hidedate"}>{item.date}</div>
        </li>
      </div>
    );
    // similar faceInt faceOut (FlipMove)
    return (
      <div>
        <ul className="theList">
          <FlipMove duration={100} easing="ease-out">
            {listItems}
          </FlipMove>
        </ul>
        //create modal edit task
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Modal">
          <form>
            <label class="control-label">Please enter task:</label>
            <hr/>
            <input class="form-control " type="text" value={this.state.todoText} onChange={this.handleChange} />
            <br/>
            <center><button class="btn btn-primary"  onClick={this.editCurent}>Save</button></center>
          </form>
        </Modal>
      </div>
    );
  }
};

export default TodoItems;
