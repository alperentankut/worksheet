//##Dinamik attribute değiştirme##

const todoInput = document.getElementById("todo");

let element;


element = todoInput;
element = todoInput.classList;
// element = todoInput.classList.add("newClass"); //Yeni bir class eklemek için bu metodu kullanıyoruz. Bunu .className üzerinden de yapabiliriz
// element = todoInput;
// element = todoInput.classList.remove("form-control");
element = todoInput;

element = todoInput.placeholder;
element = todoInput.getAttribute("placeholder"); // Bu göterimle yukardaki gösterim aynı çıktıyı veriyor.
todoInput.setAttribute("placeholder" , "Selam");
todoInput.setAttribute("title" , "Başlık"); //Attribute eklemek için de kullanabiliriz.
todoInput.removeAttribute("name") ; //Attribute kaldırmak istediğimizde kullanıyoruz.

element = todoInput;
// element = todoInput.hasAttribute("trans"); //Bu attribute var mı ? komutu gibi düşünebiliriz. Varsa true yoksa false cevabı dönecektir.


console.log(element);