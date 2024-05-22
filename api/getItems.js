const getItems = async () => {
    try {
        const response = await fetch('https://dnyandeo33.github.io/crud-todo-list/todos.json');
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

export default getItems;
