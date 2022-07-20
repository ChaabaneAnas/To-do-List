import Store from '../modules/store';
import Ui from '../modules/ui';
import './style.css';

class Task {
  constructor(description, index) {
    this.Description = description;
    this.completed = false;
    this.index = index;
  }
}

// const sortTasks = Tasks.slice(0);//
// sortTasks.sort((a, b) => a.index - b.index);//

document.addEventListener('DOMContentLoaded', Ui.DisplayTasks());
// add task//
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const Tasks = Store.getTasks();
  const input = document.querySelector('input').value;
  const task = new Task(input, Tasks.length + 1);
  Store.setTask(task);
  Ui.addTask(task);
  document.querySelector('input').value = '';
});

// delete task//
const parent = document.querySelector('.tdList');
parent.addEventListener('click', (e) => {
  if (e.target.classList.contains('bi-trash')) {
    Store.deleteTask(Number(e.target.parentElement.dataset.index));
    e.target.parentElement.remove();
  }
});

document.querySelectorAll('#task').forEach((el, i) => {
  el.addEventListener('change', () => {
    const Tasks = Store.getTasks();
    const checked = document.querySelectorAll('#task');
    Tasks[i].completed = checked[i].checked;
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  });
});

document.querySelector('a').addEventListener('click', () => {
  let Tasks = Store.getTasks();
  Tasks = Tasks.filter((task) => !task.completed);
  localStorage.setItem('Tasks', JSON.stringify(Tasks));
  // eslint-disable-next-line
  location.reload();
});
