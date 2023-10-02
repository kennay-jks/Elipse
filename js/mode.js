let env = document.querySelector('.dark-mode')

function darkMode() {
    document.body.classList.toggle('dark')
}

function loadTheme() {
    let mode = localStorage.getItem('dark')

    if (mode) {
        darkMode()
    }
}

loadTheme()

env.addEventListener('click', () => {
    darkMode()

    localStorage.removeItem('dark')
    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark', 1)
    }
})