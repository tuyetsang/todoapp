import "./TodoList.css";

import {createDateTime, createTime} from "./../../utilities/util";

import React from "react";
import TodoItems from "./TodoItems";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    // const todo=(state,action) => {
    //   return {
    //   text:action.text,
    //   key:action.key,
    //   complete:false
    // };
    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.updateStatusItem = this.updateStatusItem.bind(this);
  }

  addItem(e) {
    let items = this.state.items;
    if (this._inputElement.value !== "") {  // tao moi 1 phan tu
      items.unshift({ // thêm vào đầu mảng
        text: this._inputElement.value,
        key: Date.now(),
        done:false,
        date: createDateTime()
      });
    }
    this.setState({
      items: items
    });
    this._inputElement.value = "";
    e.preventDefault();// tat su kien của form
  }

  updateStatusItem(key){
    var items = this.state.items;
    for(var i=0;i<items.length;i++){
      if(items[i].key===key){
        items[i].done = !items[i].done;
        
        break;
      }
    }
    this.setState({
      items: items,
    });
  };

  deleteItem(key) {
    //cách 1
    // let filteredItems = this.state.items.filter((item) => {
    //   return (item.key !== key);
    // });
    // this.setState({
    //   items: filteredItems
    // });
    //cách 2
    var items = this.state.items;

    var index = 0;
    for(var i=0; i<items.length; i++){
      if(items[i].key==key){
        index = i;
        break;
      }
    }
    items.splice(index, 1); // xóa tại vị trí xóa 1 item
    this.setState({
      items: items
    });
  }

  //////////////////////// chỉnh trong hàm này nó mới thay đổi
  editItem(key, newtext) {
    var items = this.state.items;
    for(var i=0; i< items.length; i++){
      if(items[i].key===key){
        items[i].text=newtext;
        items[i].date = createDateTime(); /////////// chổ này
      }
    }
    this.setState({
      items: items
    });
  }

  render() {
    return (
      <div className="todoListMain">

        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}  placeholder="enter task" />
            <button class="add btn btn-info" type="submit" >add</button>
            <TodoItems list={this.state.items} edit={this.editItem}
            delete={this.deleteItem} updateStatus={this.updateStatusItem} />
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
