let searchButton = document.querySelectorAll(".btn")
let searchInput = document.getElementById("search")

// Função para processar a pesquisa
function processSearch() {
    event.preventDefault()
    let searchTerm = searchInput.value
    // Codifique o valor da pesquisa para ser usado em uma URL
    let encodedSearchTerm = encodeURIComponent(searchTerm)
    // Redirecione o usuário para a página de itens com o parâmetro na URL
    window.location.href = "html/search.html?busca=" + encodedSearchTerm
}

searchButton.forEach(function(searchButton) {
    searchButton.addEventListener("click", processSearch)
})

searchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        processSearch()
    }
})