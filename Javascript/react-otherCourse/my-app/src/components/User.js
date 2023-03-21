import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  render() {
    // Destructing

    const { name, department, salary } = this.props;

    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline">{name}</h4>
            <i className="far fa-trash-alt" style={{cursor : "pointer"}}></i>
          </div>
          <div className="card-body">
            <p className="card-text">Maaş : {salary}</p>
            <p className="card-text">Departman : {department}</p>
          </div>
        </div>
      </div>
    );
  }
}
User.defaultProps = {
  name: "Bilgi Yok",
  salary: "Bilgi Yok",
  department: "Bilgi Yok",
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
};

export default User;

//Biz this.props.name yerine destructing ile bundan kurtulup daha
//kolay bir şekilde propslarımızı yazabiliriz
