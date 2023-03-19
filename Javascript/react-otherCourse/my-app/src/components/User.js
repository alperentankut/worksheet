import React, { Component } from "react";

class User extends Component {
  render() {
    // Destructing
    
      const {name,department,salary} = this.props 
      
    return (
      <div>
        <ul>
          <li>İsim : {name}</li>
          <li>Departman : {department}</li>
          <li>Maaş : {salary}</li>
        </ul>
      </div>
    );
  }
  
}
export default User;

//Biz this.props.name yerine destructing ile bundan kurtulup daha 
//kolay bir şekilde propslarımızı yazabiliriz