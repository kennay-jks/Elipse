let aviso = document.querySelector(".aviso")
let ok = document.querySelector(".ok")
let cancel = document.querySelector(".cancel")

let item = localStorage.getItem("accept")

function avisoView() {
    aviso.style.display = "none"
}

window.addEventListener("DOMContentLoaded", () => {
    if (item == 2) {
        avisoView()
    }
})

ok.addEventListener("click", () => {
    console.log(item)

    if (item != 2) {
        localStorage.setItem("accept", 2)
        avisoView()
    }
})

cancel.addEventListener("click", () => {
    history.back()
})