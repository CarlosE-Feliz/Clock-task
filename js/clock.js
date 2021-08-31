/* eslint-disable no-useless-concat */
/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable no-multi-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const datos = [];
function startTime() {
  const today = new Date();
  let hr = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();
  hr = (hr === 0) ? 12 : hr;
  hr = (hr > 10) ? hr + 0 : hr;
  hr = checkTime(hr);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById('clock').innerHTML = `${hr}:${min}:${sec}`;

  const months = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const curWeekDay = days[today.getDay()];
  const curDay = today.getDate();
  const curMonth = months[today.getMonth()];
  const curYear = today.getFullYear();
  const date = `${curWeekDay},${curDay} ${curMonth} ${curYear}`;
  document.getElementById('date').innerHTML = date;

  const time = setTimeout(() => { startTime(); }, 500);
}
function checkTime(i) {
  if (i < 10) {
    i = `0${i}`;
  }
  return i;
}

function checkNumber() {
  const n1 = document.getElementById('number1').value;
  const n2 = document.getElementById('number2').value;
  if (n1 >= n2) {
    alert(`A:${n1} Es mayor que ` + `B:${n2}`);
  } else {
    alert(`B:${n2} Es mayor que ` + `A:${n1}`);
  }
}
function clean() {
  const num1 = document.getElementById('number1').value = ' ';
  const num2 = document.getElementById('number2').value = ' ';
}
function insertarDatos() {
  const lista = document.getElementById('lista');
  const dat = document.getElementById('datos').value;
  const li = document.createElement('li');
  if (dat === '') {
    alert('Inserte un valor para agregar!');
  } else {
    li.innerHTML = dat;
    lista.appendChild(li);
  }
}
function eliminarDatos() {
  const list = document.getElementById('lista');
  list.removeChild(list.childNodes[0]);
}

function limpiar() {
  const datos = document.getElementById('datos').value = ' ';
}
