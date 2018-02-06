
import {createDateTime} from './../utilities/util'
var myState = {
  items:[],
  cnt: 0
};

const todos = (state = myState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      var newItems = state.items;
      newItems.push({ 
          text: action.text,
          key: Date.now(),
          done:false,
          date: createDateTime()
        });

      return { items: newItems, cnt: state.cnt+1 };
    default:
      return myState
  }
}

export default todos