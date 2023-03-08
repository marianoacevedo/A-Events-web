let query = location.search

let params = new URLSearchParams(query)

let id = params.get('id')

let card = data.events.find(detail => detail._id == id)

function detailCard(){
    return `<div class="img-detail"><img src="${card.image}" class="img-medida" alt="cinema"></div>
            <div class="box-description-detail">
            <h3 class="detail-h3">${card.name}</h3>
            <p class="card-descripion-detail">${card.description}</p>
            </div>`
}

let detail = document.getElementById("detail")
detail.innerHTML = detailCard()