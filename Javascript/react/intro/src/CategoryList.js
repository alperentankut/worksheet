import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [
        { categoryId: 1, categoryName: "Beverages" },
        { categoryId: 2, categoryName: "Condiments" },
      ],
      currentCategory: "ggg",
    };
  }
  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
  };

  render() {
    return (
      <div>
        <h3>{this.props.info.title}</h3>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem
              onClick={() => this.changeCategory(category)}
              key={category.categoryId}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        <h4>{this.state.currentCategory}</h4>
      </div>
    );
  }
}

//Biz bu şekildeki döngülerde her bir elemanı diğerinden ayıracak bir id veriyoruz ki bir
//değişiklik olduğunda react virtual DOM'da daha yüksek performansla işlem yapabilsin.

//Yukarda constructor oluşturmadan direk state yazıp categories objesini de oluşturabilirdik.
