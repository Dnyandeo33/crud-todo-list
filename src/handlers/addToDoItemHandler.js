import addToDoItem from '../../api/addToDoItem.js';
import dom from '../dom.js';

const addToDoItemHandler = async () => {
    const { value } = dom.input;
    if (!value) {
        return null;
    }
    const newItem = {
        title: value,
        completed: false,
    };

    const res = await addToDoItem(newItem);
    return res;
};

export default addToDoItemHandler;
