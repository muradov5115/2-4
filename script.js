let inputNumber = document.querySelector('#inputNumber');
let sendBtn = document.getElementById('sendBtn');
let span = document.getElementById('span');
let plusBtn = document.getElementById('plusBtn');
let minusBtn = document.getElementById('minusBtn');
let inputColor = document.getElementById('inputColor');

sendBtn.addEventListener('click', () => {
  span.textContent = inputNumber.value;
});

plusBtn.addEventListener('click', () => {
  span.textContent++;
});

minusBtn.addEventListener('click', () => {
  span.textContent--;
});

inputColor.addEventListener('input', () => {
  span.style.color = inputColor.value;
});