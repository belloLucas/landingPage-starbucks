function imgSlider(anything) {
    document.querySelector('.starB').src = anything;
}

function circleColorChange(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}

function buttonColorChange(color){
    const btn = document.querySelector('.btn');
    btn.style.background = color;
}

function textColorChange(color){
    const strong = document.querySelector('.strong');
    strong.style.color = color;
}