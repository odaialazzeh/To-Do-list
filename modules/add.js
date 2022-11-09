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
          index: i + 1,
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

export default addfunction;