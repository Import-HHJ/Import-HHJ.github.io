const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let toDo = [];
const TO_DO_KEY = "todo";

function saveTodoList() {
  localStorage.setItem(TO_DO_KEY, JSON.stringify(toDo));
}

function deleteToDoList(event) {
  const list = event.target.parentElement;
  toDo = toDo.filter((todo) => todo.id !== parseInt(list.id));
  list.remove();
  saveTodoList();
}

function writeToDoList(newTodo) {
  const list = document.createElement("li");
  list.id = newTodo.id;
  const button = document.createElement("button");
  const span = document.createElement("span");
  list.appendChild(button);
  list.appendChild(span);
  button.innerText = "❌";
  button.style.fontSize = "25px";
  button.addEventListener("click", deleteToDoList);
  span.innerText = `${newTodo.text}`;
  todoList.appendChild(list);
}

function handleToDoSubmit(event) {
  event.preventDefault();

  const newTodo = todoInput.value;
  todoInput.value = "";
  const objTodo = {
    text: newTodo,
    id: Date.now(),
  };
  toDo.push(objTodo);
  writeToDoList(objTodo);
  saveTodoList();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TO_DO_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  toDo = parsedTodos;
  parsedTodos.forEach(writeToDoList);
}
