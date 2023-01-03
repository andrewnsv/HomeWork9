const output = document.getElementById('output');
const input = document.getElementById('input');
const submit = document.getElementById('submit');
const clear = document.getElementById('clear');

submit.addEventListener('click', () => {
    if (input.value !== '') {
      output.textContent = input.value;
      input.value = '';
      input.placeholder = 'Введите сообщение';
    } else {
      input.placeholder = 'Заполните это поле';
    }
  });

clear.addEventListener('click', () => {
  input.value = '';
  output.textContent = '';
});