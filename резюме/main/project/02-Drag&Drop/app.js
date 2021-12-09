//получаем элемент "перетащи меня из DOM"
const item = document.querySelector('.item')// передаем CSS селектор 
const placeholders = document.querySelectorAll('.placeholder')
//обрабатываем движение  элементов 
item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)// вызвается тогда, когда элемент находится над placeholder
    placeholder.addEventListener('dragenter', dragenter)//заходим на территорию placeholder конкретного 
    placeholder.addEventListener('dragleave', dragleave)// перетащи, но вышли 
    placeholder.addEventListener('drop', dragdrop)// отпустили
}

function dragstart(event) {
    //console.log('darg start', event.target);//event.target - сам элемент котром мы можем пользоваться 
    event.target.classList.add('hold')
    setTimeout(() => event.target.classList.add
    ('hide'), 0) // убирает с первонального положения 
}

function dragend(event) {
    event.target.className = 'item' // перетеравем все классы 
}
function dragover(event) {
  event.preventDefault()   // ???
}
function dragenter(event) {
    event.target.classList.add('hovered')
    console.log('drag enter');
}
function dragleave(event) {
    event.target.classList.remove('hovered')

}
function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item) // ???
}