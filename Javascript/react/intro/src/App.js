
import React from 'react';
import './App.css';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import { Container , Row } from 'reactstrap'; // Container ve rowu kullanmak için import etmemiz lazım

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Navi/>
        </Row>
        <Row>
          <CategoryList/>
          <ProductList/>
        </Row>
      </Container>
    </div>
  );
}

export default App;

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