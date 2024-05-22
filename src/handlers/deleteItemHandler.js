import deleteToDoItem from '../../api/deleteToDoItem.js';

const deleteItemHandler = async (id) => {
    document.getElementById(id).remove();
    await deleteToDoItem(id);
};

export default deleteItemHandler;
