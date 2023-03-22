import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  state = {
    isVisible : false
  } //bu da state oluşturmanın ikinci yolu
  
  
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isVisible: false,
  //   };
  
  render() {
    // Destructing

    const { name, department, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h4 className="d-inline">{name}</h4>
            <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
          </div>
          {
            isVisible ? <div className="card-body">
            <p className="card-text">Maaş : {salary}</p>
            <p className="card-text">Departman : {department}</p>
          </div> : null
          //Yukarda isVisible true ise card body i göster false ise
          //gösterme şeklinde bir kod yazdık. Değeri başlangıçta false
          //olarak verdiğimiz için gözükmeyecektir.
          }
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

// -- State --
//state vermenin iki yolu vardır. Bir tanesi constructor'ın içinde vermek
//diğeri de class ın en tepesinde oluşturmak.
