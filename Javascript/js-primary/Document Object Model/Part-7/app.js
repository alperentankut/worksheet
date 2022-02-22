// ##Dinamik element silme##

const todoList = document.querySelector("ul.list-group");
const todos = document.querySelectorAll("li.list-group-item");


//--Remove metodu--

// todos[0].remove();

//--Remove child--

// todoList.removeChild(todoList.lastElementChild);

todoList.removeChild(todos[3]); //todos node listinin 3 elemanı todoListin son elemanı olduğu için aynı çıktıyı alırız. 



console.log(todos);
console.log(todoList);

