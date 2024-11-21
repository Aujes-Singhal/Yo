let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let backBtn = document.getElementById('back');
let seeMoreBtn = document.querySelectorAll('.seemore');
let Carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');

nextBtn.onclick = function(){
    showSlider('next');
}

prevBtn.onclick = function(){
    showSlider('prev');
}

let unAcceptClick;
const showSlider = (type) => {
    nextBtn.style.pointerEvents = 'none';
    prevBtn.style.pointerEvents = 'none';

    Carousel.classList.remove('prev','next');
    let item = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(item[0]);
        Carousel.classList.add('next');
    }else{
        let position = item.length -1;
        listHTML.prepend(item[position]);
        Carousel.classList.add('prev');
    }

    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() => {
        nextBtn.style.pointerEvents = 'auto';
        prevBtn.style.pointerEvents = 'auto';
    } , 2000)
}

seeMoreBtn.forEach(button => {
    button.onclick = function(){
        Carousel.classList.add('showDetail');
    }
})

backBtn.onclick = function(){
    Carousel.classList.remove('showDetail');
}