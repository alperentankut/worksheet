//Yeni element oluşturma

// <a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>      

const newLink = document.createElement("a");
const cardbody = document.getElementsByClassName("card-body")[1];

newLink.id = "clear-todos";
newLink.className = "btn btn-warning mt-3";
newLink.href = "https://www.google.com.tr";
newLink.target = "_target";

const newBr = document.createElement("br");





//##Text Content##

//newLink.textContent = "Yeni sayfaya git"; //textContent etiketini kullandığımız parentte birden fazla child olursa bunların hepsi gidiyor ve eklemek
//istediğimiz yere yazdığımız text geliyor. Onun için textContenti her zaman kullanmak mantıklı olmayabiliyor.

//##text node##
// const text = document.createTextNode("Selam");
// cardbody.appendChild(text);
//bir yere text eklemek istediğimizde bunu textNode ile yapmak daha güvenli.

newLink.appendChild(document.createTextNode("Yeni Sayfaya Git")); //Burda yeni linkimizi oluşturduk







cardbody.appendChild(newBr);

cardbody.appendChild(newLink); //Burda ise card-body nin son child 'ına eklemiş olduk






console.log(newLink);
