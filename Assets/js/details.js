let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events";

let detail = document.getElementById("detail");

let query = location.search;

let params = new URLSearchParams(query);

let id = params.get("id");

async function eventCardApi() {
  try {
    let response = await fetch(urlApi);

    let data = await response.json();

    let card = data.events.find((detail) => detail.id == id);

    let cardDetail = `<div class="img-detail"><img src="${card.image}" class="img-medida" alt="cinema"></div>
                      <div class="box-description-detail">
                      <h3 class="detail-h3">${card.name}</h3>
                      <p class="card-descripion-detail">${card.description}</p>
                      </div>`;

    detail.innerHTML = cardDetail;
  } catch (error) {
    console.log(error);
  }
}
eventCardApi();