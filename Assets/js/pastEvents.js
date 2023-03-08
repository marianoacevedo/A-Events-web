let cards = []

function eventCard ()  {
 for (let event of data.events) {
    if(data.currentDate > event.date){
      let card =`<article class="card-articulo">
                 <img src="${event.image}" class="img" alt="cinema">
                 <h3>${event.name}</h3>
                 <p class="card-descripion">${event.description}</p>
                 <div class="card-precio-buttom">
                 <p class="precio">$${event.price}</p>
                 <button><a href="details.html">Ver Mas</a></button>
                 </div>
                 </article>`
      cards.push(card)
    }
 }
  return cards.join('')
}

let cardEvent = document.getElementById("cardEvent")
cardEvent.innerHTML = eventCard()