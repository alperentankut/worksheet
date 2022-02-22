let value;





//Veritiplerini stringe dönüştürmek

value = 123;
value = String(123);
value = String(true)
value = String([1, 2, 3, 4, 5]);
value = String(function () { console.log() });

// value = (10).toString();  //Bu da diğer bir stringe çevirme biçimi

//Veritiplerini sayıya dönüştürmek

value = Number("123");
value = Number(undefined); //Sayı olmadığı için NaN hatasını alırız
value = Number(function () { }); //Sayı olmadığı için NaN hatasını alırız
value = Number(null);
value = Number("Hello world"); //Sayı olmadığı için NaN hatasını alırız
value = Number([1, 2, 3, 4]); //NaN hatasını alırız

value = parseFloat("3.14"); //parseFloat etiketi parantez içindeki float tipinde sayı içeren bir stringi bir sayıya dönüştürür.
value = parseInt("3")  //parseInt etiketi parantez içindeki Integer tipinde sayı içeren bir stringi bir sayıya dönüştürür.

const a = "hello" + 34;

console.log(a);
console.log(typeof a); //Burda javascript 34 ü otomatik olarak stringe çevirip iki stringi topluyor. Javascriptte iki stringi bu şekilde
//toplayabiliyoruz.








console.log(value);
console.log(typeof value);