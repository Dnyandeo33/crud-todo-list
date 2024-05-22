import dom from '../dom.js';
import addToDoItemHandler from '../handlers/addToDoItemHandler.js';

const clickEvent = () => {
    dom.btn.addEventListener('click', addToDoItemHandler);
};

export default clickEvent;
