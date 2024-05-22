import dom from '../dom.js';
import addToDoItemHandler from '../handlers/addToDoItemHandler.js';

const keyupEvent = () => {
    dom.btn.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            addToDoItemHandler();
        }
    });
};
export default keyupEvent;
