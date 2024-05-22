import getItems from '../../api/getItems.js';
import createToDoList from '../components/createToDoList.js';
import dom from '../dom.js';

const loadHandler = async () => {
<<<<<<< HEAD
    const todos = await getItems();
    todos.forEach((todo) => {
=======
    const todo = await getItems();
    todo.todos.forEach((todo) => {
>>>>>>> 4659ea86679f0ccedce3286fe0eeeb948c63fdb8
        const todoList = createToDoList(todo);
        dom.itemsList.append(todoList);
    });
};

export default loadHandler;
