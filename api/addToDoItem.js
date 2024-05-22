const addToDoItem = async (item) => {
    try {
        const res = await fetch('https://dnyandeo33.github.io/crud-todo-list/todos.json', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',

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
