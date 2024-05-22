const getItems = async () => {
    try {
        const response = await fetch('http://localhost:3000/todos');
        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};

export default getItems;
