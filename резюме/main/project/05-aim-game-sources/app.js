const startBtn = document.querySelector('#start')
//забираем все экраны в одну перменную
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
//полуучаем доску
const board = document.querySelector('#board')
let time = 20
let score = 0

const colors = ['#683838', '#053b79', '#23a54491', '#b40f7df5', '#5f0da3f5', '#1f662b48', '#bbd4d6']

startBtn.addEventListener('click', (event) => {
 // отменяем поведение по умолчанию (в строке поиска при нажатии на "начать игру" не выскакивает #)
    event.preventDefault()
    screens[0].classList.add('up')
})

timeList.addEventListener('click', event => {
    if(event.target.classList.contains('time-btn')) {// если элемент по которому мы кликнули, проверяет есть ли у этого элемента опр класс
        //получаем знаение атрибута 
        time = parseInt(event.target.getAttribute('data-time'))
        //изменяем экран 
        screens[1].classList.add('up')
        startGame()
      } 
    })
    //кликаем по кругу 
    board.addEventListener('click', event => {
        //проверка, что кликнули по кругу
        if (event.target.classList.contains('circle')) {
            //увеличиваем счет игры
            score++
            //убираем старый круг
            event.target.remove()
            //вызываем новый круг
            createRandomCircle()
        }
    })


    function startGame() {
        createRandomCircle()
        //Таймер
        setInterval(decreaseTime, 1000) //через промежуток времени выполняет функцию 
        setTime(time)
    }

    function decreaseTime() { //меняем каждую секунду значение врмени  
        if (time === 0) {
            finishGame()
        } else {
        let current = --time 
        if (current < 10) {
            current = `0${current}`
        }
        
        setTime(current)
      }
    }

    function setTime(value) {
        timeEl.innerHTML = `00:${value}`
    }

    function finishGame() {
        //заговловок что игра закончена
        board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`
        //скрываем время
        timeEl.parentNode.classList.add('hide')
    }

    function createRandomCircle() {
        const circle = document.createElement('div')
        const size = getRandomNumber(10, 60)
        const {width, height} = board.getBoundingClientRect()
        const x = getRandomNumber(0, width - size)
        const y = getRandomNumber(0, height - size)
        circle.classList.add('circle')
        circle.style.width = `${size}px`
        circle.style.height = `${size}px`
        circle.style.top = `${y}px`
        circle.style.left = `${x}px`
        circle.style.backgroundColor = getRandomColor()
        board.append(circle)
    }

    function getRandomNumber(min, max) {
         return Math.round(Math.random() * (max - min) + min)
    }

    function getRandomColor() {
        const index = Math.floor(Math.random() * colors.length)
        return colors[index]
    }

    function winTheGame() {
        function kill() {
            const circle = document.querySelector('.circle')
            //браузер думает что мы по нему кликнули
            if (circle) {
            circle.click()
        }
        }
        //вызываем интервал
        setInterval(kill, 42)
    }