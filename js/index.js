btn.onclick = function() {
  let x = document.getElementById('inp1').value;
  let y = document.getElementById('inp2').value;
    // Проверка на число
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
    // Поиск наименьшего значения, подсвечиваем наименьшее
  if (x > y) {
    inp1.classList.remove('alert-danger');
    inp2.classList.remove('alert-danger');
    inp2.classList.add('alert-success');
    inp1.classList.remove('alert-success');
  }
  else {
    inp1.classList.remove('alert-danger');
    inp2.classList.remove('alert-danger');
    inp1.classList.add('alert-success');
    inp2.classList.remove('alert-success');
  }
    // Проверяем, является ли значения введенные пользователем, числами
  if(!isNumeric(x)) {
    inp1.classList.add('alert-danger');
    document.getElementById('inp1').value = "Введите число!";
  }
  if(!isNumeric(y)) {
    inp2.classList.add('alert-danger');
    document.getElementById('inp2').value = "Введите число!";
  }
};

