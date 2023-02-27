function captureSearch() {
    let search = document.getElementById('busca-input')
    let data = search.value
    console.log(data)
}

let handleSearch = (event) => { 
    event.preventDefault()
    captureSearch()
}

let buttonSearch = document.getElementById('busca-button')
buttonSearch.addEventListener('click', handleSearch)


