import React, { Component } from "react";
import User from "./User";

class Users extends Component {
  render() {
    const { users } = this.props;

    return (
      <div>
        {users.map((user) => {
          return (
            <User
              key = {user.id}
              name={user.name}
              salary={user.salary}
              department={user.department}
              
            />
            
          );
        })}
      </div>
    );
  }
  
}

export default Users;

//Biz map fonksiyonunu kullandığımızda mutlaka bir key değeri vermeliyiz.
//ve bizim bu keyimiz unique olmalı yani eşsiz olmalı. Biz zaten users 
//objemizin içinde id değeri vermiştik. Biz bu id yi key value olarak 
//kullanabiliriz.