const updateToDoItem = async (id, updatedItem) => {
    try {
        const res = await fetch(`https://dnyandeo33.github.io/crud-todo-list/todos.json/${id}`, {
            method: 'PUT',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(updatedItem),
        });
        const data = await res.json({ message: 'Item updated successfully...' });
        return data;
    } catch (error) {
        return error;
    }
};
export default updateToDoItem;
