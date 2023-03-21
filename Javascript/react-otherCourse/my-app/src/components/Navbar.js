import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
};
Navbar.propTypes = {
    title : PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title : "Default App"
}

export default Navbar;

//Bu functional componentı yüklediğimiz eklenti sayesinde
//rfc yazıp tab a bastığımızda bu kalıp otomatik oluşacaktır.

//Bu navbar başka bir yerde kullanılacaksa buna mutlaka title isminde
//types ı string olan ve mutlaka gönderilmesi gereken bir tane propsu 
//mutlaka göndermemiz gerekiyor. Yukarda Navbar.propTypes ile yazdığımız
//kod bu anlama geliyor.

//defaultProps ile yazdığımız kodda ise bir props göndermediğimizde default
//olarak hangi propsun gideceğini belirliyoruz 
