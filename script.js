let input = document.querySelector('.input')
let error = document.querySelector('.error-label')
let button = document.querySelector('.button')
let image = document.querySelector('.dashboard')
let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

button.addEventListener('click', event => {
    if (input.value.match(emailRegex)) {
        clearError()
        alert('Thanks for checking out my solution')
        location.reload()
    } else {
        error.classList.add('error-display')
        if (visualViewport.width < 1200) {
            input.classList.add('error-input-mobile')
            error.classList.add('error-display')
            button.classList.add('error-button-mobile')
        } else {
            input.classList.add('error-input-desktop')
            error.classList.add('error-display')
            image.classList.add('error-dashboard-desktop')
        }
    }
})
input.addEventListener('keyup', KeyboardEvent => {
    if (KeyboardEvent.key === 'Enter') {
        button.click()
    }
})
input.addEventListener('focus', event => {
    clearError()
})
function clearError() {
    input.classList.remove('error-input-mobile')
    input.classList.remove('error-input-desktop')
    error.classList.remove('error-display')
    button.classList.remove('error-button-mobile')
    image.classList.remove('error-dashboard-desktop')
}