const button = document.querySelector("#추가버튼");
const input = document.querySelector("#입력창");
const todos = document.querySelector("#할일들");
button.addEventListener("click", () => {
  const value = input.value;
  const p = document.createElement("p");
  p.innerText = value;
  todos.appendChild(p);
});