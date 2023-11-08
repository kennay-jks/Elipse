// Função para processar a pesquisa
function processSearch() {
    event.preventDefault()
    let searchTerm = document.getElementById("search").value
    let searchTermMobile = document.getElementById("search-mobile").value
    
    let encodedSearchTerm = encodeURIComponent(searchTerm || searchTermMobile)

    window.location.href = "search.html?busca=" + encodedSearchTerm
}

let searchButtons = document.querySelectorAll(".btn")
let searchInput = document.getElementById("search")
let searchInputMobile = document.getElementById("search-mobile")

searchButtons.forEach(function(searchButton) {
    searchButton.addEventListener("click", processSearch)
})

searchInputMobile.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        processSearch()
    }
})

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        processSearch()
    }
})