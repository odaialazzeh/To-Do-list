import Icon from '../src/delete-button.svg';

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

export default Data;