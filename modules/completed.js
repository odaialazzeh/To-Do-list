const Data = JSON.parse(localStorage.getItem('collection'));

for (let i = 0; i < Data.length; i += 1) {
  const labl = document.getElementById(`${`lable${i}`}`);
  const check = document.getElementById(`${`box${i}`}`);
  if (Data) {
    check.addEventListener('change', (e) => {
      if (check.checked === true) {
        labl.style.textDecoration = 'line-through';
        labl.style.color = '#a8a6a6';
        for (const obj of Data) {
          if (obj.index === i + 1) {
            obj.completed = true;
            localStorage.setItem('collection', JSON.stringify(Data));
          }
        }
        var existing = localStorage.getItem('arr');
        existing = existing ? existing.split(',') : [];
        existing.splice(i, 0, i);
        existing.sort();
        localStorage.setItem('arr', existing.toString());
      } else if (check.checked === false) {
        for (const obj of Data) {
          if (obj.index === i + 1) {
            obj.completed = false;
            localStorage.setItem('collection', JSON.stringify(Data));
          }
        }
        var existing = localStorage.getItem('arr');
        existing = existing ? existing.split(',') : [];
        const array = existing;
        const descArr = array.sort();
        descArr.splice(i, 1);
        localStorage.setItem('arr', descArr.toString());

        labl.style.textDecoration = 'none';
        labl.style.color = 'black';
      }
    });
  }
}

const clr = document.getElementById('clear');

clr.addEventListener('click', () => {
  const arrr = localStorage.getItem('arr');
  if (arrr) {
    const new1 = [...new Set(arrr)];
    function checkBox(item) {
      if (item !== ',') { return item; }
    }
    const result = new1.filter(checkBox);
    const descArr = result.sort().reverse();

    for (let i = 0; i < descArr.length; i += 1) {
      Data.splice(descArr[i], 1);
      localStorage.setItem('collection', JSON.stringify(Data));
    }
    for (let i = 0; i < Data.length; i += 1) {
      Data[i].index = i + 1;
      localStorage.setItem('collection', JSON.stringify(Data));
      window.location.reload();
    }
    localStorage.removeItem('arr');
    window.location.reload();
  }
});

export default clr;
