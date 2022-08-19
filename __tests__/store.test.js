import Store from '../modules/store';

describe('storeTesting', () => {
  test('addFunctionality', () => {
    const task = { Description: 'testingAdd', index: 1, completed: false };
    Store.setTask(task);
    const Tasks = Store.getTasks();
    expect(localStorage.setItem).toHaveBeenLastCalledWith('Tasks', JSON.stringify(Tasks));
    expect(localStorage.__STORE__.Tasks).toBe(JSON.stringify(Tasks));
    expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  });

  test('deleteFunctionality', () => {
    document.body.innerHTML = `
    <ul>
      <li data-index="1"> <button class ="delete">delete</button></li>
      <li data-index="2"> <button class ="delete">delete</button></li>
      <li data-index="3">  <button class ="delete">delete</button></li>
    </ul>`;

    const buttons = document.querySelectorAll('.delete')
    buttons.forEach((button) => button.addEventListener('click', (e) => {
      Store.deleteTask(Number(e.target.parentElement.dataset.index));
    }));

    const button = shallow(<Button onClick={
      Store.deleteTask(Number(e.target.parentElement.dataset.index));
    }>Ok</Button>);
     button.find('button').simulate('click'); expect(mockCallBack.mock.calls.length).toEqual(1);
    
  });
});