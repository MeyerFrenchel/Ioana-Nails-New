function imgSlider(anything) {
    document.querySelector('.nail-pic').src = anything;
}

function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color; 
}
let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation')
let toggleMenu = () => {
    
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');
}

    menuToggle.addEventListener('click', toggleMenu);



