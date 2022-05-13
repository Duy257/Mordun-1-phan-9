// let tt = document.getElementById('olclick');
// tt.addEventListener('click',click2)

function click2() {
    let weight = +document.getElementById('weight').value;
    let height = parseFloat(document.getElementById('height').value);
    let bmi = weight / (height*height);
    if(bmi <= 30) {
        console.log(bmi);
        if(bmi < 18.5) {fa-border
            alert('Underwight')
        }
        else if (bmi < 25) {
            alert('Normal')
        }
        else if (bmi < 30) {
            alert('Overweight')
        }
        else{
            alert('Obese')
        }
    }
    else {
        alert('Bạn quá mập! Đớp ít thôi =))')
    }

}


