let shadow = document.querySelector('.shadow-mode')
let body = document.querySelector('body')
let ball = document.querySelector('.ball')
let ini = document.querySelector('.inicio')
let para = document.querySelector('#para')
let black = document.querySelector('#preto-p')
let white = document.querySelector('#branco-p')
let preto = document.querySelector('#preto')
let branco = document.querySelector('#branco')

shadow.addEventListener('click', () => {
    if (shadow.classList.contains('active')) {
        shadow.classList.remove('active')
        shadow.classList.add('nothing')
        shadow.style.background = '#080808'
        body.style.background = '#d6d6d6'
        body.style.color = '#080808'
        ball.style.background = '#d6d6d6'
        ini.style.background = '#080808'
        para.style.color = '#d6d6d6'
        branco.style.display = 'none'
        preto.style.display = 'block'
        black.style.display = 'none'
        white.style.display = 'block'
    } else {
        shadow.classList.remove('nothing')
        shadow.classList.add('active')
        shadow.style.background = '#d6d6d6'
        body.style.background = '#080808'
        body.style.color = '#d6d6d6'
        ball.style.background = '#080808'
        ini.style.background = '#d6d6d6'
        para.style.color = '#080808'
        preto.style.display = 'none'
        branco.style.display = 'block'
        white.style.display = 'none'
        black.style.display = 'block'
    }
})