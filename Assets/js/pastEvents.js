let urlApi = "https://mh-h0bh.onrender.com/api/amazing";

let cardEvent = document.getElementById("cardEvent");

let cards = [];

function eventCard(date, response) {
  for (let event of response) {
    if (date > event.date) {
      let card = `<article class="card-articulo">
                 <img src="${event.image}" class="img" alt="cinema">
                 <h3>${event.name}</h3>
                 <p class="card-descripion">${event.description}</p>
                 <div class="card-precio-buttom">
                 <p class="precio">$${event.price}</p>
                 <button><a href="details.html?id=${event.id}">Ver Mas</a></button>
                 </div>
                 </article>`;
      cards.push(card);
    }
  }
  return cards.join("");
}

async function eventCardApi() {
  try {
    let response = await fetch(urlApi);
    
    let data = await response.json();
    
    cardEvent.innerHTML = eventCard(data.date,data.response);
  } catch (error) {
    console.log(error);
  }
}
eventCardApi();