import React from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

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

    // good phần này
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.editItem = this.editItem.bind(this);
    this.updateStatusItem = this.updateStatusItem.bind(this);
    // this.toggleSidenav = this.toggleSidenav.bind(this);

  }



  addItem(e) {
    let itemArray = this.state.items;

    if (this._inputElement.value !== "") {  // tao moi 1 phan tu
      itemArray.unshift({ // thêm vào đầu mảng, good
        text: this._inputElement.value,
        key: Date.now(),
        done:false,
        date:new Date().toString()
      });
    }

    this.setState({
      items: itemArray
    });

    this._inputElement.value = "";
    console.log(itemArray);
    e.preventDefault();// tat su kien của form
  }

  updateStatusItem(key){
    var newItems = this.state.items;

    for(var i=0;i<newItems.length;i++){
      if(newItems[i].key===key){
        newItems[i].done = !newItems[i].done;
        break;
      }
    }
    this.setState({
      items: newItems
    });
  };

  deleteItem(key) {
    // Cách viết này rất khó học.
    // let filteredItems = this.state.items.filter((item) => {
    //   return (item.key !== key);
    // });
    // this.setState({
    //   items: filteredItems
    // });

    //cách viết khác cho dễ hiểu
    
    var newItems = this.state.items;

    var vitrixoa = 0;
    for(var i=0; i<newItems.length; i++){
      if(newItems[i].key==key){
        vitrixoa = i;
        break;
      }
    }
    newItems.splice(vitrixoa, 1); // xóa tại vị trí xóa 1 item

    this.setState({
      items: newItems
    });
  }

  editItem(key, newtext) {
    var newItems = this.state.items;

    for(var i=0; i< newItems.length; i++){
      if(newItems[i].key===key){
        newItems[i].text=newtext;
      }
    }

    this.setState({
      items: newItems
    });
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}  placeholder="enter task" />
            
            <button class="add" type="submit" >add</button>

            <TodoItems danhsach={this.state.items} edit={this.editItem}
            delete={this.deleteItem} updateStatusItem={this.updateStatusItem} />

          </form>
        </div>
      </div>
    );
  }
}


export default TodoList;
///////////////
