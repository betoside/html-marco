
const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);
let pixels = 10;

btnRight = c('.button-arrow.-right');
btnLeft = c('.button-arrow.-left');
itensCarrossel = c('.itens-carrossel');

btnRight.addEventListener('click', function(){
    pixels = pixels - 50;
    itensCarrossel.style = `transform: translateX(${pixels}px)`;
});

btnLeft.addEventListener('click', function(){
    pixels = pixels + 50;
    itensCarrossel.style = `transform: translateX(${pixels}px)`;
});