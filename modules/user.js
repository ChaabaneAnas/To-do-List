import Store from './store';

export default function completed(i) {
  const Tasks = Store.getTasks();
  const checked = document.querySelectorAll('#task');
  Tasks[i].completed = checked[i].checked;
  localStorage.setItem('Tasks', JSON.stringify(Tasks));
}
