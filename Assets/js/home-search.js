let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events";  //API

let cardEventSearch = document.getElementById("cardEvent");

let buttonSearch = document.getElementById("busca-button");               // Captura de documentos

let search = document.getElementById("busca-input");

function captureSearch(capture) {                                        // funcion de captura de search y checkbox y devolucion de datos
  let filterSearch = [];

  let checkbox = Array.from(
    document.querySelectorAll(".check-cat:checked")                     // Indica los checkboxs seleccionados
  ).map((each) => each.value);

  let filtro = capture.filter((each) => {                               //Filtros con las condiciones de devolucion de datos
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
                  <button><a href="details.html?id=${event.id}">Ver Mas</a></button>
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
  return filterSearch;
}

async function searchApi() {                                              // Funcion async
  try {
    let response = await fetch(urlApi);                                   // Espera de respuesta de la API

    let data = await response.json();                                    // Espera de respuesta del response
    
    cardEventSearch.innerHTML = (captureSearch(data.events)).join('');   // Impresion de card de todos los eventos

    let handleSearch = (event) => {
      event.preventDefault();
      cardEventSearch.innerHTML = captureSearch(data.events).join('');   // Impresion de card de filtros
    };

    buttonSearch.addEventListener("click", handleSearch);                // boton para el evento del click
  } catch (error) {
    console.log(error);
  }
}
searchApi();                                                            //invoco funcion