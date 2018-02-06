import React from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";
import {createDateTime} from "./../../utilities/util";


class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.updateStatusItem = this.updateStatusItem.bind(this);
  }

  // create new item
  addItem(e) {
    let items = this.state.items;
    if (this._inputElement.value !== "") {
        // add new item into first array
        items.unshift({
        text: this._inputElement.value,
        key: Date.now(),
        done:false,
        date:createDateTime()
      });
    }
    this.setState({
      items: items
    });
    this._inputElement.value = "";
    console.log(items);

    // turn off default event of form
    e.preventDefault();
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
      items: items
    });
  };

  deleteItem(key) {
    var items = this.state.items;
    var index = 0;

    for(var i=0; i<items.length; i++){
      if(items[i].key==key){
        index = i;
        break;
      }
    }

    // delete item at index
    items.splice(index, 1);
    this.setState({
      items: items
    });
  }

  editItem(key, newtext) {
    var items = this.state.items;
    for(var i=0; i< items.length; i++){
      if(items[i].key===key){
        items[i].text=newtext;
        items[i].date=createDateTime();
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
