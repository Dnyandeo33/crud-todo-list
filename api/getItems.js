export const baseUrl = 'https://dnyandeo33.github.io/crud-todo-list/todos.json';

const getItems = async () => {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

export default getItems;
