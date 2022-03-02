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
          name : "Oguzcan Budumlu",
          email : "obudumlu@gmail.com"
        },
        {
          id : 3,
          name : "Aykut Tekkanat",
          email : "aykut_fb@gmail.com"
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
        <Users users={this.state.users}/>
      </div>
    )
  }
    
      


  
}

export default App;
