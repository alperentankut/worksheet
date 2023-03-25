import React, { Component } from "react";
import User from "./User";
import UserConsumer from "../context";

class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          const { users } = value;
          return (
            <div>
              {users.map((user) => {
                return (
                  <User
                    key={user.id}
                    name={user.name}
                    salary={user.salary}
                    department={user.department}
                  />
                );
              })}
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default Users;

//Biz map fonksiyonunu kullandığımızda mutlaka bir key değeri vermeliyiz.
//ve bizim bu keyimiz unique olmalı yani eşsiz olmalı. Biz zaten users
//objemizin içinde id değeri vermiştik. Biz bu id yi key value olarak
//kullanabiliriz.
