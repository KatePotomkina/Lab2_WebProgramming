const form = document.querySelector('form');
const excellentSpan = document.querySelector('#excellent');
const goodSpan = document.querySelector('#good');
const unsuccessfulSpan = document.querySelector('#unsuccessful');
const unsuccessfulList = document.querySelector('#unsuccessfulList');

let excellentCount = 0;
let goodCount = 0;
let unsuccessfulCount = 0;
let unsuccessfulStudents = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const surnameInput = form.elements['surname'];
  const mark1Input = form.elements['mark1'];
  const mark2Input = form.elements['mark2'];
  const mark3Input = form.elements['mark3'];
  const mark4Input = form.elements['mark4'];
  const mark5Input = form.elements['mark5'];

  const surname = surnameInput.value;
  const mark1 = parseInt(mark1Input.value);
  const mark2 = parseInt(mark2Input.value);
  const mark3 = parseInt(mark3Input.value);
  const mark4 = parseInt(mark4Input.value);
  const mark5 = parseInt(mark5Input.value);

  const averageMark = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;

  if (averageMark === 5) {
    excellentCount++;
  }
   else if(mark1 === 2 || mark2 === 2 || mark3 === 2 || mark4 === 2 || mark5 === 2)  {
    unsuccessfulCount++;
    unsuccessfulStudents.push(surname);
   }else if (averageMark >= 4 ) {
    goodCount++;
  }
    
  

  excellentSpan.textContent = excellentCount;
  goodSpan.textContent = goodCount;
  unsuccessfulSpan.textContent = unsuccessfulCount;

  if (unsuccessfulStudents.length > 0) {
    unsuccessfulList.innerHTML = '';
    for (const student of unsuccessfulStudents) {
      const li = document.createElement('li');
      li.textContent = student;
      unsuccessfulList.appendChild(li);
    }
  }

  form.reset();
});
