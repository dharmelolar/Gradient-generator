const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const output = document.querySelector('h3');
const body = document.querySelector('#gradient');
const btn = document.querySelector('.random-btn');


function setGradient(){
    body.style.background = "linear-gradient(to right, "
    + color1.value + ',' + color2.value  + ")";

    output.innerHTML = body.style.background + ";";
}

btn.addEventListener('click', function(){
    "linear-gradient(to right, "
    + color1.value + ',' + color2.value  + ")";
})
color1.addEventListener("input",setGradient);
color2.addEventListener("input", setGradient);

