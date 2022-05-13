function input(input) {
    let hienthi = document.getElementById('display').value += input;
}
function result() {
    let hienthi = document.getElementById('display').value;
    document.getElementById('display').value = eval(hienthi);
}
function reset() {
    let hienthi = document.getElementById('display').value = "";
}