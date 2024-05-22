import getItems from '../../api/getItems.js';
import createToDoList from '../components/createToDoList.js';
import dom from '../dom.js';

const loadHandler = async () => {
    const todos = await getItems();
    todos.forEach((todo) => {
        const todoList = createToDoList(todo);
        dom.itemsList.append(todoList);
    });
};

export default loadHandler;
