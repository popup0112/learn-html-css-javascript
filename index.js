const button = document.querySelector("#추가버튼");
const input = document.querySelector("#입력창");
const todos = document.querySelector("#할일들");
const reset = document.querySelector("#초기화");
const newtodos = [];
button.addEventListener("click", () => {
  const value = input.value;

  const newtodo = document.createElement("p");
  newtodos.push(newtodo);
  newtodo.innerText = value;

  todos.appendChild(newtodo);
  input.value = "";

  newtodo.addEventListener("click", () => {
    if (newtodo.className !== "done") {
      newtodo.className = "done";
    } else {
      newtodo.className = "";
    }
  });
});
reset.addEventListener("click", () => {
  newtodos.forEach((newtodo) => {
    todos.removeChild(newtodo);
  });
});
