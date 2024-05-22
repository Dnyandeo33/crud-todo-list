const updateToDoItem = async (id, updatedItem) => {
    try {
        const res = await fetch(`http://localhost:3000/todos/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
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
