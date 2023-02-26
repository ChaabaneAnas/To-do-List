import Store from '../modules/store';
import Ui from '../modules/ui';
import Update from '../modules/Update';
import './style.css';

class Task {
  static counter = 0;

  constructor(description, index) {
    this.Description = description;
    this.completed = false;
    this.index = index;
  }
}

document.addEventListener(
  'DOMContentLoaded',
  Ui.DisplayTasks(),
  Update.UpdateI(),
);
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

// checbox control //
parent.addEventListener('change', (e) => {
  if (e.target.classList.contains('box')) {
    const id = Number(e.target.parentElement.parentElement.dataset.index) - 1;
    Update.updateStatue(id);
  }
});

// clear //
document.querySelector('a').addEventListener('click', () => {
  Update.clear();
  Ui.DisplayTasks();
});

// edit value //
parent.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (e.target.classList.contains('edit')) {
      const newValue = e.target.value;
      const id = Number(e.target.parentElement.parentElement.dataset.index) - 1;
      Update.updateValue(id, newValue);
    }
  }
});
