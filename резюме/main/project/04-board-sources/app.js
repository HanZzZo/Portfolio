const board = document.querySelector('#board')
const colors = ['#683838', '#053b79', '#23a54491', '#b40f7df5', '#5f0da3f5', '#1f662b48', '#bbd4d6']
const SQUARES_NUMBER = 400

for (let i = 0; i < SQUARES_NUMBER; i++) { //на каждой итерации создаем переменную 
    const square = document.createElement('div') //чтобы динамически создать HTML элемент 
    square.classList.add('square') //добавлям класс, чтобы превратить в квадрат

    //добовляем слушателя событий для каждого квадрата
    square.addEventListener('mouseover', () => setColor(square) )//вызвается когда наводим на квадрат
    square.addEventListener('mouseleave', () => removeColor(square) )
    //необходимо добавить в сам HTML
    board.append(square)
}

function setColor(element) {
    //получаем цвет
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

//выбираме случайную функцию
function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}