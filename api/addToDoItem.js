const addToDoItem = async (item) => {
    try {
        const res = await fetch('http://localhost:3000/todos', {
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
