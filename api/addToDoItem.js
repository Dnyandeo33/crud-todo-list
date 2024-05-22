const addToDoItem = async (item) => {
    try {
        const res = await fetch('https://dnyandeo33.github.io/crud-todo-list/todos.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item),
        });
        const data = await res.json({ message: 'Items added successfully...' });
        return data;
    } catch (error) {
        return error;
    }
};

export default addToDoItem;
