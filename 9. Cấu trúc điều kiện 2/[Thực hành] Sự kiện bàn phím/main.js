function upArrawPressed() {
    let element = document.getElementById('nobita');
    element.style.top = parseInt(element.style.top) -5 + 'px';
}
function downArrawPressed() {
    let element = document.getElementById('nobita');
    element.style.top = parseInt(element.style.top) +5 + 'px';
}
function leftArrawPressed() {
    let element = document.getElementById('nobita');
    element.style.left = parseInt(element.style.left) -5 + 'px';
}
function rightArrawPressed() {
    let element = document.getElementById('nobita');
    element.style.left = parseInt(element.style.left) +5 + 'px';
}

function moveSelection(evt) {
    switch(evt.keyCode) {
        case 37:
            leftArrawPressed()
            break;
        case 39:
            rightArrawPressed()
            break;
        case 38:
            upArrawPressed()
            break;
        case 40:
            downArrawPressed()
            break;
    }
}
function doReady() {
    window.addEventListener('keydown', moveSelection);
}
