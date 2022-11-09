import _ from 'lodash';
import './index.css';
import Icon from './delete-button.svg';

/* add new task */
const add = document.getElementById('add');

const addfunction = (event) => {
  if (event.key === 'Enter') {
    let existingEntries = JSON.parse(localStorage.getItem('collection'));
    const entrytask = document.getElementById('add').value;
    if (existingEntries == null) existingEntries = [];
    if (existingEntries) {
      for (let i = 0; i <= existingEntries.length; i += 1) {
        var task = {
          description: entrytask,
          completed: false,
          index: i,
        };
      }
    }

    localStorage.setItem('task', JSON.stringify(task));
    existingEntries.push(task);
    localStorage.setItem('collection', JSON.stringify(existingEntries));
    localStorage.removeItem('task');
    if (add.value !== '') {
      add.value = '';
    }
    window.location.reload();
  }
};

add.addEventListener('keypress', addfunction);

/* show tasks */

const Data = JSON.parse(localStorage.getItem('collection'));
const div = document.getElementById('list');
if (Data) {
  for (let i = 0; i < Data.length; i += 1) {
    const divUL = document.createElement('div');
    divUL.className = 'container';
    divUL.id = 'container';
    div.appendChild(divUL);

    const ul = document.createElement('ul');
    divUL.appendChild(ul);

    const divimg = document.createElement('div');
    divimg.className = 'divImg';
    divUL.appendChild(divimg);

    const img1 = document.createElement('img');
    img1.src = Icon;
    img1.id = i;
    divimg.appendChild(img1);

    const li = document.createElement('li');
    ul.appendChild(li);

    const task = document.createElement('input');
    task.type = 'checkbox';
    task.id = i;
    task.name = 'check';
    li.appendChild(task);

    const li1 = document.createElement('li');
    ul.appendChild(li1);

    const lable = document.createElement('label');
    lable.innerHTML = `${Data[i].description}`;
    lable.id = `${`lable${i}`}`;
    li1.appendChild(lable);

    const put = document.querySelector('.input');
    put.after(div);
  }
}

/* remove */

const idDiv = document.getElementsByTagName('img');
const buttonPressed = (e) => {
  const elementId = e.target.id;
  Data.splice(elementId, 1);
  localStorage.setItem('collection', JSON.stringify(Data));
  for (let i = 0; i < Data.length; i += 1) {
    Data[i].index = i;
    localStorage.setItem('collection', JSON.stringify(Data));
    window.location.reload();
  }
  window.location.reload();
};

for (const img of idDiv) {
  img.addEventListener('click', (buttonPressed));
}

/* Update */
const container = document.querySelectorAll('.container');
for (let i = 0; i < Data.length; i += 1) {
  const labl = document.getElementById(`${`lable${i}`}`);
  if (Data) {
    container[i].addEventListener('mouseout', () => {
      labl.contentEditable = true;

      for (const obj of Data) {
        if (obj.index === i) {
          obj.description = labl.textContent;
          localStorage.setItem('collection', JSON.stringify(Data));
          break;
        }
      }
    });
  }
}
