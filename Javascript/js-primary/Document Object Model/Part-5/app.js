let value ;

const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)")
const cardrow = document.querySelector(".card.row") //Bu gösterim classı hem card olan hem de row olan anlamına geliyor.

value = todoList;
value = todo;
value = cardrow;

//##Child Nodes## -Text dahil alıyor

value = todoList.childNodes; //Bizim list-group classımızda 4 tane child'ımız olmasına rağmen nodelistte 9 tane element oluştu. Bunun sebebi
//bu node list oluşturulurken satır atlamaları da element olarak sayılıyor ve text olarak listeye ekleniyor. 

//Children - Text dahil olmuyor.

value = todoList.children;
value = todoList.children[1];
// value = todoList.children[2].textContent="Değişti";

value = cardrow;
value = cardrow.children;
value = cardrow.children[2].children[1].textContent = "değişiyor" //cardrowun 2. çocuğunun 1. çocuğunun textcontentini değiştirdik.

value = todoList;

value = todoList.children[1]; //bunun yerine

value = todoList.firstElementChild;
value = todoList.children.length;
value = todoList.childElementCount; //length etiketiyle aldığımız sonucun aynısı fakat biraz daha kısası.

value = cardrow;
value = cardrow.parentElement; //Kapsayıcısını çağırmak için kullanıyoruz.
value = cardrow.parentElement.parentElement;


//##Element kardeşleri bulma##

value = todo;
value = todo.previousElementSibling; //Sibling zaten kardeş demekti. todo değerimiz todo2 idi biz bi öncekine gittiğimizde todo1 e gitmiş oluyoruz.
value = todo.nextElementSibling; //Bu da bir sonraki kardeş elemente gidiyor.
value = todo.previousElementSibling.previousElementSibling; //null cevabını alacağız çünkü iki element öncesinde bir kardeşi yok.

console.log(value);