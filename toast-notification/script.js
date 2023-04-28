const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'Message One',
    'Message Two',
    'Message Three',
    'Message Four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null) {
    const notif = document.createElement('div')
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()

    toasts.appendChild(notif)

    setTimeout(() => {
        notif.remove()
    }, 3000)
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)]
}

/*------------------------------------------- backgroundColor --------------------------------------- */
const colorBtn = document.getElementById('change-color-button');
const body = document.body;

colorBtn.addEventListener('click', changeColor);

function changeColor() {
  const colors = ['#FF5733', '#F7DC6F', '#2ECC71', '#85C1E9', '#8E44AD', '#F39C12'];
  const randomColor = Math.floor(Math.random() * colors.length);
  body.style.backgroundColor = colors[randomColor];
  
}
