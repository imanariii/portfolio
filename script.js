if (window.jQuery) {
    var verJquery = jQuery.fn.jquery;
    // выведем версию jQuery в консоль
    console.log(verJquery);
    $(document).ready(function () {
        $('.slider').slick({
            arrows: true, // показать стрелки
            dots: false, // не показывать точки
            slidesToShow: 3, // показывать по 3 слайда
            autoplay: true, // автоматическое проигрывание слайдов
        });
    });
    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1
            }
        }
    ]
}

let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})

const nav = document.querySelectorAll('.nav-items a');
const sliders = document.querySelectorAll('.page');

nav.forEach(a => {
    a.addEventListener('click', () => {
        nav.forEach(a => {
            a.classList.remove('active')
        });
        a.classList.add('active');

        let currentSlide = document.querySelector(a.dataset.name); 
        sliders.forEach(slide => slide.classList.remove('active'));
        currentSlide.classList.add('active');
    });
})
