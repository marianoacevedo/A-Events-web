let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events?time=upcoming";

let cardEvent = document.getElementById("cardEvent");

let buttonSearch = document.getElementById("busca-button");

let search = document.getElementById("busca-input");

function captureSearch(capture) {
  let filterSearch = [];

  let checkbox = Array.from(
    document.querySelectorAll(".check-cat:checked")
  ).map((each) => each.value);

  let filtro = capture.filter((each) => {
    return (
      each.name.toLowerCase().includes(search.value.toLowerCase()) &&
      (checkbox.length === 0 || checkbox.includes(each.category))
    );
  });
console.log(filtro)
  if (filtro.length > 0) {
    for (let event of filtro) {

      let card = `<article class="card-articulo">
                  <img src="${event.image}" class="img" alt="cinema">
                  <h3>${event.name}</h3>
                  <p class="card-descripion">${event.description}</p>
                  <div class="card-precio-buttom">
                  <p class="precio">$${event.price}</p>
                  <button class="card-buttom"><a href="details.html?id=${event.id}">Ver Mas</a></button>
                  </div>
                  </article>`;
      filterSearch.push(card);
    }
  } else {
         return  `<article class="card-articulo">
                  <img src="assets/img/Logo Amazing Events.png" class="img" alt="cinema">
                  <h3>Not found</h3>
                  <p class="card-descripion">Not found</p>
                  </article>`;
  }
  return filterSearch.join('');
}

async function upcomingSearchApi() {
  try {
    let response = await fetch(urlApi);

    let data = await response.json();
    
    cardEvent.innerHTML = captureSearch(data.events);

    let handleSearch = (event) => {
      event.preventDefault();
      cardEvent.innerHTML = captureSearch(data.events);
    };

    buttonSearch.addEventListener("click", handleSearch);
  } catch (error) {
    console.log(error);
  }
}
upcomingSearchApi();