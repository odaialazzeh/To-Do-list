const container = document.querySelectorAll('.container');
const update = JSON.parse(localStorage.getItem('collection'));

for (let i = 0; i < update.length; i += 1) {
  const labl = document.getElementById(`${`lable${i}`}`);
  if (update) {
    container[i].addEventListener('mouseout', () => {
      labl.contentEditable = true;

      for (const obj of update) {
        if (obj.index === i + 1) {
          obj.description = labl.textContent;
          localStorage.setItem('collection', JSON.stringify(update));
          break;
        }
      }
    });
  }
}

export default update;
