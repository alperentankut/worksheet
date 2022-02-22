
let value;

value = document;

// Scriptler

value = document.scripts;

value = document.scripts.length;

//Link

value = document.links;
value = document.links.length;
value = document.links[document.links.length-1].getAttribute("class"); //Çağırdığımız attribute özelliğini gösteriyor.
value = document.links[document.links.length-1].className //Yukardaki işlevin aynısını yapıyor
value = document.links[document.links.length-1].classList //Ayrı ayrı liste şeklinde görmek istersek bu etiketi kullanırız.


//Formlar

value = document.forms;
value = document.forms.length;
value = document.forms[0];
value = document.forms[0].id;
value = document.forms[0].name;
value = document.forms[0].method;



console.log(value);