import React from "react";
import FlipMove from 'react-flip-move';
// import Dialog from 'react-bootstrap-dialog'
// import {Button} from 'react-bootstrap'

class TodoItems extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.delete = this.delete.bind(this);
    this.updateItem = this.updateItem.bind(this);
    // this.toggleComplete = this.toggleComplete.bind(this);


    this.state = {
      name:  "sang"
    };
  }

  // key={item.key} onClick={()=>store.dispatch({
  // key:item.key
  // });
  // }
  // style={{
  // textDecoration:item.complete ? 'line-through' : 'none'
  // }}


  delete(key) {
    this.props.delete(key);
  };

  updateItem(key) {
    this.props.updateStatusItem(key);
  };

  show(key){
    this.props.show(key);
  };

  edit(key, text) {
    var newtext = prompt("Nhap vao task", text);

    if(newtext != null)
      this.props.edit(key, newtext);
  };


  render() {
    var todoEntries = this.props.danhsach;
    var listItems = todoEntries.map((item) => // như foreach nó sẽ đi qua từng item và tạo ra html cho mình.
      <div class="listRow">
        <li>
          <div onClick={() => this.updateItem(item.key)} class={!item.done ? "newItem" : "doneItem"}>{item.text}</div>
          
          <button onClick={() => this.delete(item.key)}>Delete</button>
          <button onClick={() => this.edit(item.key, item.text)}>Edit</button> 
        </li>
      </div>
      );
      
      // chổ <button>Edit</button> thiếu onClick={() => this.edit(item.key)} tôi đã thêm vào cho bạn rồi
      
    // hiệu ứng hiện nhanh chậm giống faceInt faceOut (FlipMove)
    return (
      <ul className="theList">
      <FlipMove duration={100} easing="ease-out"> 
        {listItems}
      </FlipMove>
      </ul>
    );
  }
};

export default TodoItems;
