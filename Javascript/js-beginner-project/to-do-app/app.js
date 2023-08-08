//Selectors

const input = document.querySelector(".input");
const btn = document.querySelector(".submit");
const categories = document.querySelector(".categories");
const option = document.querySelector(".option");
const checkTodo = document.querySelector(".fa-check");

btn.addEventListener("click", () => {
  const value = input.value;
  if (value === "") {
    alert("Please enter todo");
  } else {
    const newElement = document.createElement("div");
    newElement.className = "todo";
    newElement.innerHTML = `<p class="${value}">${value}</p><div class="icons"><i class=" delete-button fa-solid fa-trash ${value}"></i><i class="${value} fa-solid fa-check"></i></div>`;
    document.querySelector(`.${option.value}`).appendChild(newElement);
  }
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-button")) {
    e.target.parentElement.parentElement.remove();
  }
  else if (e.target.classList.contains("fa-check")){
    e.target.parentElement.parentElement.classList.add("done")
  }
});

// if(e.target.className === todo.className){
//   todo.remove()
// }
