import $ from 'jquery'
import ButtonEdit from './../../utilities/buttonedit';
import FlipMove from 'react-flip-move';
import Modal from 'react-modal';
import React from "react";
import ReactDOM from 'react-dom';

const customStyles = {
  content : {
    top                   : '30%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width : '500px'
  }
};

class TodoItems extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      modalIsOpen : false,
      todoKey: "",
      todoText: ""
    };

    this.delete = this.delete.bind(this);
    this.updateStatus = this.updateStatus.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.editToParent = this.editToParent.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.edit = this.edit.bind(this);
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

  handleChange(event) {
    this.setState({todoText: event.target.value});
  }

  edit(item) {
    this.setState({todoKey: item.key, todoText: item.text});
    this.openModal();

  };

  editToParent(){
    var key = this.state.todoKey;
    var newtext = this.state.todoText;
    if(newtext != null){
      this.props.edit(key, newtext);
    }

    this.closeModal();
  }

  closeModal(){
    this.setState({modalIsOpen : false});
  }

  openModal(){
    this.setState({modalIsOpen : true});
  }
  
  render() {
    var todoEntries = this.props.list;
    var listItems = todoEntries.map((item) => // như foreach nó sẽ đi qua từng item và tạo ra html cho mình.
      <div class={!item.done ? "listRow" : "listRowDone"}>
        <li >
          <div onClick={() => this.updateStatus(item.key)} class={!item.done ? "newItem" : "doneItem"}>{item.text}</div>

          {/* <button class="btn btn-info" onClick={() => this.edit(item.key, item.text)}>Edit</button> */}

          {/* tinh nang button edit */}
          <ButtonEdit value={'Edit'} click={this.edit} data={item}/>
          <button class="btn btn-danger" onClick={() => this.delete(item.key)}>Delete</button>
          <div  onClick={() => this.updateStatus(item.key)} class={!item.done ? "viewdate" : "hidedate"}>{item.date}</div>
        </li>
      </div>
      );
    // hiệu ứng hiện nhanh chậm giống faceInt faceOut (FlipMove)
    return (
      <div>
        <ul className="theList">
          <FlipMove duration={100} easing="ease-out">
            {listItems}
          </FlipMove>
        </ul>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">
          <form>
            <h2>Cập nhật todo</h2>
            <br/>
            <input type="text" value={this.state.todoText} onChange={this.handleChange} />
            <button onClick={this.editToParent}>sua</button>
          </form>
        </Modal>

      </div>
    );
  }
};

export default TodoItems;
