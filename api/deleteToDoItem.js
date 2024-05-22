const deleteToDoItem = async (id) => {
    try {
        const res = await fetch(`https://dnyandeo33.github.io/crud-todo-list/todos.json/${id}`, {
            method: 'DELETE',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
        });
        const data = await res.json({ message: 'item has been deleted successfully...' });
        return data;
    } catch (error) {
        return error;
    }
};

export default deleteToDoItem;
