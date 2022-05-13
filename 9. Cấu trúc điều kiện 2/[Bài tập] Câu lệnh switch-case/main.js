function a(){
let a = document.getElementById('month').value;
let month = +parseInt(a);
    switch (month){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert('tháng này có 31 ngày')
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert('Tháng này có 30 ngày')
            break;
        case 2:
            alert('Tháng này có 28 hoặc 29(năm nhuận) ngày')
            break;
    }

}