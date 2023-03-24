import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/Users";

class App extends Component {
  state = {
    users: [
      {
        id: 1,
        name: "Alperen Tankut",
        salary: "20000",
        department: "Sağlık",
      },
      {
        id: 2,
        name: "Oğuzcan Budumlu",
        salary: "40000",
        department: "Bilişim",
      },
      {
        id: 3,
        name: "Aykut Tekkanat",
        salary: "15000",
        department: "Gıda",
      },
    ],
  };

  render() {
    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <Users users={this.state.users} />
      </div>
    );
  }
}
export default App;

//jsx formatı sadece bir tane parent element dönebilir. Bu da genelde div olur
//htmlde kullandığımız bazı keywordler burda hata verebiliyor. Örneğin htmlde
//class olarak kullandığımız etiketi burda className olarak kullanmamız gerekiyor.
//Veya label etiketinde for değilde htmlFor olarak kullanmamız gerekiyor.
//zaten bunu yanlış kullandığımızda consol da hata olarak görebiliyoruz.
//Biz jsx formatında javascript ifadelerimizi yalnızca süslü parantez içinde
//yazabiliyoruz.
//Reactta iki çeşit component var. Birisi functional component diğeri ise
//class base component. Farkları ise ; component eğer herhangi bir state almıyorsa
//ve sabit olacaksa bunu functional component olarakta oluşturabiliriz.
//ancak class componentlarımızda hem state hem propslarımız olacaktır.
//propslar bir componentten başka bir componente veri aktarmamızı sağlayan
//bir özelliktir.
