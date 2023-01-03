const output = document.getElementById("output");
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const clear = document.getElementById("clear");
const err = document.querySelector(".err");

submit.addEventListener("click", () => {
  if (input.value !== "") {
    output.textContent = input.value;
    input.value = "";
    input.placeholder = "Введите сообщение";
    err.classList.remove("errActive");
  } else {
    input.placeholder = "Заполните это поле";
    err.classList.add("errActive");
  }
});

clear.addEventListener("click", () => {
  input.value = "";
  output.textContent = "";
  err.classList.remove("errActive");
});
