const idDiv = document.getElementsByTagName('img');
const buttonPressed = (e) => {
  const Data = JSON.parse(localStorage.getItem('collection'));
  const elementId = e.target.id;
  Data.splice(elementId, 1);
  localStorage.setItem('collection', JSON.stringify(Data));
  for (let i = 0; i < Data.length; i += 1) {
    Data[i].index = i + 1;
    localStorage.setItem('collection', JSON.stringify(Data));
    window.location.reload();
  }
  window.location.reload();
};

for (const img of idDiv) {
  img.addEventListener('click', (buttonPressed));
}

export default buttonPressed;