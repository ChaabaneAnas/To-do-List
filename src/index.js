import './style.css';

const Tasks = [
  { description: 'join second program session', completed: false, index: 5 },
  { description: 'take a cold shower', completed: true, index: 1 },
  { description: 'have breakfeast', completed: false, index: 2 },
  { description: 'join ur morning session call', completed: false, index: 3 },
  { description: 'have lunch ', completed: false, index: 4 },
];

const sortTasks = Tasks.slice(0);
sortTasks.sort((a, b) => a.index - b.index);

const populate = () => {
  sortTasks.forEach((task) => {
    const ListWrapper = document.querySelector('.tdList');
    const ListElement = document.createElement('li');
    ListElement.innerHTML = `<input id="task" type="checkbox"><label for="task"><span class="checkbox"></span>${task.description}</label>`;
    ListWrapper.appendChild(ListElement);
  });
};
document.addEventListener('DOMContentLoaded', populate());
