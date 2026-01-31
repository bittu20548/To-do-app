const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  if (input.value === "") return;

  const li = document.createElement("li");
  li.innerText = input.value;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.onclick = () => li.remove();

  li.appendChild(delBtn);
  list.appendChild(li);

  input.value = "";
}