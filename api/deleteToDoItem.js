const deleteToDoItem = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'DELETE',
        });
        const data = await res.json({ message: 'item has been deleted successfully...' });
        return data;
    } catch (error) {
        return error;
    }
};

export default deleteToDoItem;
