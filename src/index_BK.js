//import React from 'react';
import React from "react";
import ReactDOM from 'react-dom';
import './TodoList.css';
import './index.css';

/*import TodoList from "./TodoList";
import TodoItems from "./TodoItems";
import registerServiceWorker from './registerServiceWorker';*/

// ReactDOM.render(<App />, document.getElementById('root'));

// registerServiceWorker();
// ReactDOM.render(
//   <TodoList />,
//   document.getElementById('container')
// );

import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    width : '500px'
  }
};

class ModalHeader extends React.Component{
 	render() {
	    return (
	      <div className="modal-header">
	        {this.props.title}
	        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
	          <span aria-hidden="true">&times;</span>
	        </button>
	      </div>
	    )
 	}
};

class ModalBody extends React.Component{
 	render() {
	    return (
	      <div className="modal-body">
	        <input  type="text" name="category" placeholder="edit content" className="mx-sm-3 form-control form-control" val={this.props.content}/>
	      </div>
	    )
 	}
};

class ModalFooter extends React.Component{
 	render() {
	    return (
	      <div className="modal-footer">
	        	<button type="button" className="btn btn-primary">Submit</button>
	        	<button type="button" className="btn btn-primary">Cancel</button>
	      </div>
	    )
 	}
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalHeader title="Modal Title"/>
          <ModalBody/>
          <ModalFooter/>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));
