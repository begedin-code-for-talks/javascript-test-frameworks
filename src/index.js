var add = require('./sum');

var buttonEl = document.getElementById('add');

buttonEl.onclick = function() {
  var firstNum = parseInt(document.getElementById('first').value);
  var secondNum = parseInt(document.getElementById('second').value);

  var result = add(firstNum, secondNum);

  var resultEl = document.getElementById('result');
  resultEl.innerText = result;
}
