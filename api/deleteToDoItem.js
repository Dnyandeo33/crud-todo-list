import { baseUrl } from './getItems.js';

const deleteToDoItem = async (id) => {
    try {
        const res = await fetch(`${baseUrl}/${id}`, {
            method: 'DELETE',
        });
        const data = await res.json({ message: 'item has been deleted successfully...' });
        return data;
    } catch (error) {
        return error;
    }
};

export default deleteToDoItem;
