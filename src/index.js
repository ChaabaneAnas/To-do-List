import Store from '../modules/store';
import Ui from '../modules/ui';
import Update from '../modules/user';
import './style.css';

class Task {
  constructor(description, index) {
    this.Description = description;
    this.completed = false;
    this.index = index;
  }
}

document.addEventListener('DOMContentLoaded', Ui.DisplayTasks(), Update.UpdateI());
// add task//
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const Tasks = Store.getTasks();
  const input = document.querySelector('input').value;
  const task = new Task(input, Tasks.length + 1);
  Store.setTask(task);
  Ui.DisplayTasks();
  document.querySelector('input').value = '';
});

// delete task//
const parent = document.querySelector('.tdList');
parent.addEventListener('click', (e) => {
  if (e.target.classList.contains('bi-trash')) {
    Store.deleteTask(Number(e.target.parentElement.dataset.index));
    Update.UpdateI();
    Ui.updateD();
    Ui.DisplayTasks();
  }
});

document.querySelectorAll('#checkbs').forEach((checkb, i) => {
  checkb.addEventListener('change', () => {
    const Tasks = Store.getTasks();
    const checked = document.querySelectorAll('#checkbs');
    Tasks[i].completed = checked[i].checked;
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  });
});

document.querySelector('a').addEventListener('click', () => {
  let Tasks = Store.getTasks();
  Tasks = Tasks.filter((task) => !task.completed);
  localStorage.setItem('Tasks', JSON.stringify(Tasks));
  Ui.DisplayTasks();
});

parent.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const Tasks = Store.getTasks();
    if (e.target.classList.contains('edit')) {
      const { value } = e.target;
      Tasks[Number(e.target.parentElement.parentElement.dataset.index) - 1].Description = value;
    }
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  }
});