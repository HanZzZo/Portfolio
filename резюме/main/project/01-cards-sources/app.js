//оборачиваем в функцию чтобы передавать параметр для активного слайда
function slidesPlugin(activeSlide = 0) {
    //получаем каждый слайд 
const slides = document.querySelectorAll('.slide')

slides[activeSlide].classList.add('active')

for (const slide of slides) {
    slide.addEventListener('click', () => {
        clearActiveClasses() 

        slide.classList.add('active')//добовляем класс 
    })
}

function clearActiveClasses()  { //очищаем активный массив 
    slides.forEach((slide) => {
         slide.classList.remove('active')
    })
}
}

slidesPlugin(4)