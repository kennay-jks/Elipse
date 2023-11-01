// Função para obter parâmetros da URL
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]')
    let regex = new RegExp('[\\?&]' + name + '=([^&#]*)')
    let results = regex.exec(location.search)
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
}

  // Ler o parâmetro da busca da URL
  let searchTerm = getUrlParameter('busca').toLowerCase()

  // Aplicar o filtro
  let items = document.querySelectorAll(".link")

  items.forEach(function(item) {
    let dataSearch = item.getAttribute("data-search").toLowerCase()
    if (dataSearch.includes(searchTerm)) {
      item.style.display = "flex"
    } else {
      item.style.display = "none"
    }
})