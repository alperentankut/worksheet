import React, { Component } from "react";

export default class ProductList extends Component {
    
  render() {
    return (
    <div>
        <h3>{this.props.info.title} - {this.props.currentCategory}</h3>
    </div>
    );
  }
}
//Reactın yeni sürümlerindeki iyileştirmelerle CategoryListte oluşturduğumuz
//constructor yapısını oluşturmadan da title a yukardaki şekilde ulaşabiliyoruz.
