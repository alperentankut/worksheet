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
}

function loadAllTodosUI(){
    let todos = getTodosFromStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo);


    })
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