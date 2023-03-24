import React, { Component } from "react";

const UserContext = React.createContext();

//Provider , Consumer

export class UserProvider extends Component {
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
    return <UserContext.Provider value = {this.state}>{this.props.children}
    
    </UserContext.Provider>;
  }
}

const UserConsumer = UserContext.Consumer

export default UserConsumer;

//Biz bunu bu şekilde oluşturmadan , kullanacağımız yerlerde
// UserContext.consumer şeklinde kullanabiliriz. fakat yukardaki 
//daha güvenli bir yöntem olacaktır.


//Yapımız bir div dönmeyecek. Biz burda User context'imizin sağladığı
//provider'ı dönmek için provider'ı dönmemiz gerekecek
//Biz ilerde userprovider ın altına app i koyacağımız için onu temsil
//etmesi açısından {this.props.children} yerleştiriyoruz. Bu children
//bizim user provider'ımızın çocuklarını gösteriyor.
//Diğer uygulamalarımızda bu state i kullanmamız için value değerini
//state e eşitledik.
//Bu value 'yi kullanmamız için bir de consumer ı oluşturmamız gerekli.