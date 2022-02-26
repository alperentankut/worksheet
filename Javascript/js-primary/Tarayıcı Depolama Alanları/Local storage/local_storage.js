//Local storage

//--Set value--

// localStorage.setItem("hareket" , "burpee");
// localStorage.setItem("tekrar" , 50);

//Local storage da değerler string olarak kaydedilir. Yani bir sayı değeri yazsak bile bu local storage a string olarak kaydedilir.

//--Get Item--

// const value = localStorage.getItem("tekrar");

// console.log(typeof value);

//--Clear local storage--

// localStorage.clear();

// localStorage.setItem("hareket" , "burpee");
// localStorage.setItem("tekrar" , 50);


// console.log(localStorage.getItem("sport"));


// if(localStorage.getItem("sport") === null){

//     console.log("Değer bulunamadı..")
// };

// else {
//     console.log("Değer bulundu")
// }


//--Local storage - array yazma--

// const todos = ["Todos1" , "Todos2" , "Todos3"];

// localStorage.setItem("todos" , JSON.stringify(todos));

// //Burdaki JSON , stringi array gibi yazmamızı sağlıyor.

// const value = JSON.parse(localStorage.getItem("todos"))

// console.log(value);

//JSON.parse komutu direk arraye çeviriyor. stringify gibi arraymiş gibi yazmıyor.

const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");

form.addEventListener("submit" , addTodo);

function addTodo(e){

    const value = todoInput.value;

    let todos;

    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos" , JSON.stringify(todos));
    


    e.preventDefault()
};

//Bizim local storage da bir arrayden değer almamız için önce o arrayin olması gerekiyor
//o array yoksa önce onu oluşturup sonra o değerimizi alıyoruz.

//## fonksiyonda öncelikle value değeriyle girilen inputu alıyoruz. Sonrasında arrayi oluşturmak için todos değişkenine bir
//if yazıyoruz. Bu ifte eğer local storage da todos değerimiz yoksa boş bi array olarak cevap alacağımızı söylüyoruz. Eğer todos değeri
// var ise todos arrayini çağırıyoruz. Çağırdıktan sonra her girdiğimiz değeri todos.push komutuyla bu arraye ekliyoruz. En son setItem
//ile bu arrayi oluşturuyoruz.##

