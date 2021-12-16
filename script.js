let spanValue = document.querySelector('#value');
let decBtn = document.querySelector('.decrease');
let incBtn = document.querySelector('.increase');
let RBtn = document.querySelector('.reset');
let myH1 = document.querySelector('h1');
let myContainer = document.querySelector('.container');

let count = 0;

decBtn.addEventListener('click', function() {
    count--;
    if (count < 0) {
        spanValue.style.color = 'red';

    } else if (count > 0) {
        spanValue.style.color = 'green';

    } else {
        spanValue.style.color = 'black';

    }


    spanValue.innerText = count;



});
RBtn.addEventListener('click', function() {
    count = 0;
    spanValue.style.color = 'black';
    spanValue.innerText = count;

});
incBtn.addEventListener('click', function() {
    count++;
    if (count < 0) {
        spanValue.style.color = 'red';

    } else if (count > 0) {
        spanValue.style.color = 'green';

    } else {
        spanValue.style.color = 'black';

    }
    spanValue.innerText = count;

});