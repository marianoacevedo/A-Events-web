let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events"

let cardEvent = document.getElementById("cardEvent")

let cards = []

function eventCard (events)  {
  for (let event of events) {
      let card =`<article class="card-articulo">
                 <img src="${event.image}" class="img" alt="cinema">
                 <h3>${event.name}</h3>
                 <p class="card-descripion">${event.description}</p>
                 <div class="card-precio-buttom">
                 <p class="precio">$${event.price}</p>
                 <button><a href="details.html?id=${event.id}">Ver Mas</a></button>
                 </div>
                 </article>`
      cards.push(card)
  }
  return cards.join('')
}

async function eventCardApi(){
  try{
    let response = await fetch(urlApi)
    
    let data = await response.json()
    
    cardEvent.innerHTML = eventCard(data.events)

  }
  catch(error){
    console.log(error)
  }
}
eventCardApi()