//получаем селекторы
const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')

//получаем левую часть экрана
const sidebar = document.querySelector('.sidebar')
//получаем колическтво слайдов 
const mainSlide = document.querySelector('.main-slide')
//получаем количество div внутри 
const slidesCount = mainSlide.querySelectorAll('div').length
//получаем размер экрана для правильно прокрутки картинок
const container = document.querySelector('.container')

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {    //добовляем слушателя 
    changeSlide('up')
})

downBtn.addEventListener('click', () => {    
    changeSlide('down')
})

//управление кнопками
document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {//код кнопки
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
})

function changeSlide(direction) { //передаем направления 
    //если нажали вверх
    if(direction === 'up') {
        activeSlideIndex++
        //добавляем проверку чтобы не уходила за рамку 
        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
         //если нажали вниз 
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const heigth = container.clientHeight //???
    mainSlide.style.transform = `translateY(-${activeSlideIndex * heigth}px)`

    sidebar.style.transform = `translateY(${activeSlideIndex * heigth}px)`
}