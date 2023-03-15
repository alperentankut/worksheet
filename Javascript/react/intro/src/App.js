import React, { Component } from "react";
import "./App.css";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap"; // Container ve rowu kullanmak için import etmemiz lazım

export default class App extends Component {
  // let titleCategory = "Category List";
  // let titleProduct = "Product List"

  render() {
    let productInfo = { title: "Product List", other: "other" };
    let categoryInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              {/* <CategoryList title = {titleCategory} /> */}
              <CategoryList info={categoryInfo} />
            </Col>
            <Col xs="9">
              {/* <ProductList title = {titleProduct} /> */}
              <ProductList info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

//Reactta üst componentten alt componente veri aktarabiliyoruz fakat
//alt componentten üst componente veri aktaramıyoruz
//Bir ana componentin bi alt componenti olduğunu düşünelim. O alt componentin
//de bi alt componenti olduğunu varsayalım. Biz ana componentten en alttaki
//componente veri göndermek için önce ana componentin altındakine ordan
//en alt componente hiyerarşik düzenle gönderebiliyoruz. Yani direk ana
//componentten en alt componente veri gönderemiyoruz.
//bu component yapısının bize avantajı sadece değiştirdiğimiz componentin
//render edilmesi. Yani performans verimliliği olarak artı dönüş sağlıyor.

//js in en önemli yapılarından biri jsx yapısıdır. returnden sonraki parantez
//içinde bu jsx yapısını görüyoruz. Yukarda yazdığımız dil özünde html etiketi
//olmasına rağmen reactta kolaylık olması adına yine aynı şekilde yazılır
//aslında bu div bir jsx yapısıdır ve react kütüphanesinde bir değere karşılık
//gelmektedir

//bizim indirdiğimiz paketler node_modules klasörüne yükleniyor.
//biz paketlerimizi ya npm install ile yüklüyoruz veya package.json dosyamızda dependencies
//taginin altına manuel olarak yazıyoruz. (paketi yazdıktan sonra sürüm için ctrl + space).

//Yukarda yorum satırına aldığımız productlist ve categorylist gösterimleri işin özünde
//doğrudur ve çalışır fakat her yeni veri eklediğimizde jsx yapımızdaki taglere eklediğimiz
//özellikleri yazmamız gerekecek ve bu çok uzun bir gösterim halini alacak
//bunun yerine yukarda obje yapısıyla jsx yapısında değişiklik yapmadan yeni verileri sadece
//obje yapımıza ekleyerek daha temiz bir kod yazmış oluruz.

//props bir componentten diğerine data taşıma yöntemidir.
//state bir componentin datasıdır.
