import updateToDoItem from '../../api/updateToDoItem.js';

const changeHandler = async (item) => {
    const updateItem = {
        ...item,
        completed: !item.completed,
    };

    const { id } = item;
    await updateToDoItem(id, updateItem);
};
export default changeHandler;
