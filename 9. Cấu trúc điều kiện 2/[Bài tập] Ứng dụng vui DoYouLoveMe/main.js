
function click1() {
    alert('Ngu');
}
function mouseMove() {
   let noButton = document.getElementById('no');
   let browserHeight = innerHeight;
   let browserWidth = innerWidth;
   noButton.style.position = 'relative'
   noButton.style.left = Math.random() * browserWidth /2 + 'px';
   noButton.style.top =  Math.random() * browserHeight/2 + 'px';
}





// function moveButton() {
//         let noButton = document.getElementById("no");
//         let browserHeight = window.innerHeight;
//         let browserWidth = window.innerWidth;
//         noButton.style.position = "relative";
//         let randomPoisitionLeft = Math.random() * browserHeight / 2;
//         let randomPoisitionTop = Math.random() * browserWidth / 2;
//         noButton.style.left = randomPoisitionLeft + "px";
//         noButton.style.top = randomPoisitionTop + "px";
//     }
