
// function sumnumber(sum) {
//   return sum.number1 + sum.number2;
// }

// const sum = {
//   number1: 12,
//   number2: 19
// };

// const element = (
//   // <input type="text" name="sum.number1">
//   // <input type="text" name="sum.number2">
// <div>
//   <p>{sumnumber(sum)}</p>


//    </div>
// );
//////////////
// const element = React.createElement(
//   'h1',
//   {className: 'greeting'},
//   'Hello, world!'
// );
//////////////
// const element = <h1>Hello, world</h1>;
/////////
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>
//         It is{' '}
//         {new Date().toLocaleTimeString()}.
//       </h2>
//     </div>
//   );
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;
///////////////////

// class Myapp extends React.Component {
//    constructor() {
//       super();
//
//       this.state = {
//          data: []
//       }
//
//       this.setStateHandler = this.setStateHandler.bind(this);
//    };
//    setStateHandler() {
//       var item = "setState..."
//       var myArray = this.state.data.slice();
// 	  myArray.push(item);
//       this.setState({data: myArray})
//    };
//    render() {
//       return (
//          <div>
//             <button onClick = {this.setStateHandler}>SET STATE</button>
//             <h4>State Array: {this.state.data}</h4>
//          </div>
//       );
//    }
// }
//
// ReactDOM.render(<Myapp />, document.getElementById('root'));
/////////////////////////
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};
//
//     // This binding is necessary to make `this` work in the callback
//     this.handleClick = this.handleClick.bind(this);
//   }
//
//   handleClick() {
//     this.setState(prevState => ({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }
//
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }
//
// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
