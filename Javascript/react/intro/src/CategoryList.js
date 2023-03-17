import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then((response) => response.json())
      .then((data) => this.setState({ categories: data }));
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              active={
                category.categoryName === this.props.currentCategory
                  ? true
                  : false
              }
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

//Biz bu şekildeki döngülerde her bir elemanı diğerinden ayıracak bir id veriyoruz ki bir
//değişiklik olduğunda react virtual DOM'da daha yüksek performansla işlem yapabilsin.

//Yukarda constructor oluşturmadan direk state yazıp categories objesini de oluşturabilirdik.

//!!! state değiştiği anda o state i kullanan tüm componentler yeniden render edilir.!!!
//reactta önce componentler yerleşiyor sonrasında render ediliyor. Buna lifecycle event
//deniyor. Yani önce component oluşuyor sonra içerisinde olacak veriler render
//ediliyor.
