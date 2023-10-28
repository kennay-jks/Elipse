// let lista = document.querySelector('.lista')
// let search = document.querySelector('#search')

// fill = ['<a href="">Heráclito</a>','<a href="">Maquiavel</a>','<a href="">Nietzsche</a>','<a href="">Schopenhauer</a>','<a href="">Platão</a>','<a href="">Parmênides</a>','<a href="">Tales de Mileto</a>','<a href="">Descartes</a>','<a href="">Socrates</a>','<a href="">Diógenes</a>','']

// t = ""

// for (i in fill) {
//     t += "<li>"+fill[i]+"</li>"
//     fill[i] = fill[i].toLowerCase()
//     //fill[i] = fill[i].normalize("NFD")
// }

// lista.innerHTML = t

// search.onkeyup=function(e){
//     t = this.value

//     r = new RegExp(t,'g')

//     for (i in fill) {
//         if ( fill[i].match(r) ) {
//             lista.children[i].removeAttribute('style')
//             lista.style.display = 'none'
//         } else {
//             lista.children[i].style.display = 'none'
//             lista.style.display = 'flex'
//         }
//     }
// }