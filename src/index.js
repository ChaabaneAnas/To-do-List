 /* eslint-disable */

import "./style.css";

class Store {
  static getTasks = () => {
    let Tasks;
    if(localStorage.getItem('Tasks') === null) {
    Tasks = [];
    }
    else Tasks = JSON.parse(localStorage.getItem('Tasks'));
    return Tasks;
  }

  static setTask = (task) => {
    const Tasks = this.getTasks();
    Tasks.push(task);
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  }

  static deleteTask = () => {
    const Tasks = this.getTasks();
    Tasks.slice(index, 1);
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  }
}

 class Ui { 
  static addTask = (task) => {
    const ListWrapper = document.querySelector('.tdList');
    const ListElement = document.createElement('li');
    ListElement.innerHTML = `<input id="task" type="checkbox">
    <label for="task"><span class="checkbox"></span>${task.description}</label>`;
    ListWrapper.appendChild(ListElement);
  }

  static DisplayTasks = () => {
    const Tasks = Store.getTasks();
    Tasks.forEach(task => {
      this.addTask(task);
    });
  }
}

class Task {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

//const sortTasks = Tasks.slice(0);//
//sortTasks.sort((a, b) => a.index - b.index);//

document.addEventListener('DOMContentLoaded', Ui.DisplayTasks());
//add task//
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault;
  const Tasks = Store.getTasks();
  const input = document.querySelector('input').value;
  const task = new Task(input,Tasks.length+1)
  Store.setTask(task);
  Ui.addTask(task);
})

//delete task//
//document.querySelector('.tdList').addEventListener('change', () => console.log('change'));//
document.querySelectorAll('#task').forEach((el, i) => {
 el.addEventListener('change',() => {
  const Tasks = Store.getTasks();
  const checked = document.querySelectorAll('#task')
  Tasks[i].completed = checked[i].checked;
  localStorage.setItem('Tasks', JSON.stringify(Tasks));
  console.log(Tasks[i])
 })
})

