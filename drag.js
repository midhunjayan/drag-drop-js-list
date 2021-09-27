'use strict';

const dragItems = [...Array(100).keys()]

const ulItem = document.getElementById('dragableList');

dragItems.map(item => {
    const li = document.createElement('li');
    li.innerText = item + 1;
    li.id = `listItem${item}`;
    li.draggable = true;
    li.ondragstart = dragStarted;
    li.ondrop = dropItem;
    li.ondragover = allowDrop;
    li.style['background-color'] = getRandomColor();
    ulItem.append(li);
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function dragStarted(event) {
    event.dataTransfer.setData('listValue', event.target.textContent);
}
function dropItem(event) {
    event.preventDefault();
    const sourceData = event.dataTransfer.getData('listValue');
    const el = document.getElementById(`listItem${sourceData}`);
    el?.parentNode.removeChild(el);
    const result = Number(sourceData) + Number(event.target.textContent);
    event.target.innerText = result;
    
}
function allowDrop(ev) {
    ev.preventDefault();
}