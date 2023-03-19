import React from "react";

const Navbar = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
};

export default Navbar;

//Bu functional componentı yüklediğimiz eklenti sayesinde
//rfc yazıp tab a bastığımızda bu kalıp otomatik oluşacaktır.
