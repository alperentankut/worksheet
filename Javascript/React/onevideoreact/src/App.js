import React, { Component } from "react";
import AddUser from "./components/AddUser";
import Users from "./components/Users";




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          id : 1,
          name : "Alperen Tankut",
          email : "tankut.alperen@gmail.com"
        },
        {
          id : 2,
          name : "Alperen",
          email : "tankut.alperen1@gmail.com"
        },
        {
          id : 3,
          name : "Tankut",
          email : "tankut.alperen2@gmail.com"
        },
      ]
    };
  }
  
  render() {
    return (
      <div className="container">
        <h4>User app</h4>
        <hr />
        <AddUser />
        <hr/>
        <Users />
      </div>
    )
  }
    
      


  
}

export default App;
