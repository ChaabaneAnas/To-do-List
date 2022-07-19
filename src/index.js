 /* eslint-disable */

import { store } from "../../AwesomeBooksEs6/modules/store";
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

  static deleteTask = (el) => {
    const Tasks = this.getTasks();
    Tasks.forEach((task, i) => {
      if (el === task.index) {
        Tasks.splice(i, 1);
      }
    });
    localStorage.setItem('Tasks', JSON.stringify(Tasks));
  }

  }


 class Ui { 
  static addTask = (task) => {
    const ListWrapper = document.querySelector('.tdList');
    const ListElement = document.createElement('li');
    ListElement.setAttribute('data-index', task.index)
    ListElement.innerHTML = `<div class = "flex"><input id="task" type="checkbox">
    <label for="task"><span class="checkbox"></span>${task.Description}
    </label></div><i class="bi bi-trash"></i>`
    ListWrapper.appendChild(ListElement);
  }

  static DisplayTasks = () => {
    const Tasks = Store.getTasks();
    Tasks.forEach(task => {
      this.addTask(task);
    });
  }

  static removeTask = () => {
    document.querySelector('.bi-trash').addEventListener('click', (e) => {
    e.target.parentElement.remove
    })
  }
}

class Task {
  constructor(description, index) {
    this.Description = description;
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
const parent = document.querySelector('.tdList');
parent.addEventListener('click', (e) => {
  if(e.target.classList.contains('bi-trash')){
    Store.deleteTask(Number(e.target.parentElement.dataset.index))
    console.log(e.target.previousElementSibling.lastElementChild.textContent)
    e.target.parentElement.remove()

  }
})


document.querySelectorAll('#task').forEach((el, i) => {
 el.addEventListener('change',() => {
  const Tasks = Store.getTasks();
  const checked = document.querySelectorAll('#task')
  Tasks[i].completed = checked[i].checked;
  localStorage.setItem('Tasks', JSON.stringify(Tasks));
 })
})



