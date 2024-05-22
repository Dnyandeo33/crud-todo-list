import changeHandler from '../handlers/changeHandler.js';
import deleteItemHandler from '../handlers/deleteItemHandler.js';
import createBtn from './createBtn.js';

const createToDoList = (todos) => {
    const container = document.createElement('div');
    container.classList.add('todo-item');
    container.id = todos.id;

    const title = document.createElement('p');
    title.innerText = todos.title;
    title.id = todos.id;
    title.classList.add('title');

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn-container');

    // create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = todos.id;
    checkbox.classList.add('checkbox');
    checkbox.checked = todos.completed;

    checkbox.addEventListener('change', () => {
        changeHandler(todos);
    });

    // create delete button
    const btnDelete = createBtn('button', 'Delete', 'delete-btn');
    btnDelete.addEventListener('click', () => {
        deleteItemHandler(todos.id);
    });

    btnContainer.append(checkbox, btnDelete);
    container.append(title, btnContainer);

    return container;
};

export default createToDoList;
