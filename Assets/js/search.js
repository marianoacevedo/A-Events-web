function captureSearch() {
    let search = document.getElementById('busca-input').value
    console.log(search)
    let filtro = data.events.filter(each => {
        return each.name.includes(search)
})
console.log(filtro)
console.log(filtro[0].name)
if (filtro.length>0) {
    return `<article class="card-articulo">
                 <img src="${filtro[0].image}" class="img" alt="cinema">
                 <h3>${filtro[0].name}</h3>
                 <p class="card-descripion">${filtro[0].description}</p>
                 <div class="card-precio-buttom">
                 <p class="precio">$${filtro[0].price}</p>
                 <button><a href="details.html?id=${filtro[0]._id}">Ver Mas</a></button>
                 </div>
                 </article>`
} else {
     alert("no encontrado")
}
}

let handleSearch = (event) => { 
    event.preventDefault()
    let cardEvent = document.getElementById("cardEvent")
cardEvent.innerHTML = captureSearch()
}

let buttonSearch = document.getElementById('busca-button')
buttonSearch.addEventListener('click', handleSearch)


