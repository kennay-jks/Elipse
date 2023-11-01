// Função para processar a pesquisa
function processSearch() {
    event.preventDefault()
    let searchTerm = document.getElementById("search").value
    // Codifique o valor da pesquisa para ser usado em uma URL
    let encodedSearchTerm = encodeURIComponent(searchTerm)
    // Redirecione o usuário para a página de itens com o parâmetro na URL
    window.location.href = "search.html?busca=" + encodedSearchTerm
}

// Para dispositivos móveis, use o evento "touchstart" no botão de pesquisa
let searchButtons = document.querySelectorAll(".btn")
let searchInput = document.getElementById("search")
let searchInputMobile = document.getElementById("search-mobile")

searchButtons.forEach(function(searchButton) {
    searchButton.addEventListener("click", processSearch)
    // Adicione um evento de toque para dispositivos móveis
    searchButton.addEventListener("touchstart", processSearch)
})

// Lidando com a tecla "Enter" no campo de pesquisa móvel
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