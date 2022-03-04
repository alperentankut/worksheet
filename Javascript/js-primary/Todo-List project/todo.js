const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");


eventListeners();

function eventListeners(){  //Tüm event listenerlar

    form.addEventListener("submit" , addTodo);
    document.addEventListener("DOMContentLoaded" , loadAllTodosUI);
    document.addEventListener("click" , deleteTodo);
    filter.addEventListener("keyup" , filterTodos);
}
function filterTodos(e){
    const filterValue = e.target.value.toLowerCase(); 
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(listItem){
        const text = listItem.textContent.toLowerCase();
        if(text.indexOf(filterValue)=== -1){
            //Bulamadı
            listItem.setAttribute("style","display : none !important") //-1 e eşitse sayfada gösterme dedik.
        } 
        else {
            listItem.setAttribute("style" , "display : block");
        }


    });
//Yukardaki kodu yazdığımızda aradıklarımızın dışındakiler kaybolmuyor. Bu da
//Bootstrap kaynaklı bir durum. Class olan d-flex burdaki none ı baskılıyor. yani
//d-flexin içinde important olarak display block özelliği bulunuyor. Bunu engellemek
//için !important etiketini kullanıyoruz

}
function loadAllTodosUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);


    })
}

function deleteTodo(e){
    if(e.target.className === "fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success" , "todo başarıyla silindi")
    }
}

function deleteTodoFromStorage (deletetodo){

    let todos = getTodosFromStorage();

    todos.forEach(function(todo , index){

        if(todo === deletetodo){
            todos.splice(index , 1); // o indexten itibaren 1 obje siliyoruz.
        }

    });
    localStorage.setItem("todos" , JSON.stringify(todos))

}

function addTodo(e){
    
    const newTodo = todoInput.value.trim(); //burdaki trim inputun başına ve sonuna koyulan boşlukları siliyor.
    
    if(newTodo === ""){
           
        
        showAlert("danger" , "Lütfen bir todo giriniz"); //type ı danger veya success mi onu belirleyecek
    }
    else{
        addTodoToUI(newTodo); //girdiğimiz inputu dinamik olarak sayfaya eklemek için yazdık. UI(user interface)
        addTodoToStorage(newTodo);

        showAlert("success" , "todo başarıyla eklendi..")
    }


    
    
    
    e.preventDefault();
}

function getTodosFromStorage(){ //Storage dan tüm todoları almak.
    let todos ;
    if(localStorage.getItem("todos") === null){
        todos = []
    }

    else{
        todos =JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}


function addTodoToStorage(newTodo){
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos" , JSON.stringify(todos));
};

function showAlert(type,message){
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message;
    firstCardBody.appendChild(alert);
    
    //setTimeout

    setTimeout(function(){
        alert.remove();

    },1700) //2000 2 saniye sonra kaybolsun demek

}
function addTodoToUI(newTodo){  //string değerini list item olarak UI ye ekleyecek
 
    
    //List item oluşturma                
    const listItem = document.createElement("li");
    
    //link oluşturma
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'></i>"

    
    listItem.className = "list-group-item d-flex justify-content-between";
    //List item'a text node ekleme
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    
    //Todo liste list item ı eklemel

    todoList.appendChild(listItem);
    todoInput.value = ""; //todoyu ekledikten sonra satırın boşalması için yazıyoruz.
    
};

//eventListener fonksiyonumuzda tüm eventlistener'larımızı atayacağız. Daha
//toplu bir görüntü olması için yapıyoruz.