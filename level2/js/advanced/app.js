//Var 
// var name = "Alperen";
// console.log(name);

// name = "Kemal";
// console.log(name);

//Let

// let name = "Alperen";
// let name = "Kemal";
// console.log(name);

//let ve var arasındaki fark ; var etiketinde önceden atadığımız değeri değiştirebiliyoruz fakat let etiketinde bu mümkün değil. Syntax
//hatası alıyoruz.

// let a,b;

// a = 10;

// b = 20;

// console.log(a+b);


//Const

// const name = "Alperen";

// console.log(name);

// name = "Kemal";

// console.log("name");

//const etiketinde ise önceden atadığımız değeri değiştiremiyoruz. İlk atadığımız değer baz alınıyor. İkinci sefer değeri değiştirmeye
//çalışırsak hata alıyoruz.

// const a;

// a = 10;

// console.log(a); //bu komuttada hata alıyoruz. Çünkü const etiketiyle verdiğimiz değerleri const satırında atamamız gerekli. Alt satırda
//değer ataması yapamıyoruz.

const a = [1,2,3,4,5];

console.log(a);

// a = [1,2,3,4,5,6];

// console.log(a); //burda reference tipte bir değer atamamıza rağmen hata alıyoruz. Const etiketinin bir özelliği bu.

a.push(6);

console.log(a); // fakat burda push komutuyla eleman eklediğimiz zaman bu bir problem teşkil etmityor. Çünkü referans ettiği 
//yeri değiştirmedik sadece o değere ekleme yaptık.

