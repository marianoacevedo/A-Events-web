let urlApi = "https://api-amazingevents.onrender.com/api/amazing-events?time=past";

let maxAtt = document.getElementById("max-att")

let maxAttName = document.getElementById("max-att-name")

let minAtt = document.getElementById("min-att")

let minAttName = document.getElementById("min-att-name")

let maxCap = document.getElementById("max-cap")

let maxCapName = document.getElementById("max-cap-name")

async function eventStatisticsApi() {
    try {
      let response = await fetch(urlApi);
  
      let data = await response.json();

      let result = data.events;

      let statistics = result.sort(function(a, b) {
        return a.assistance - b.assistance 
      });

      maxAtt.innerHTML = statistics[statistics.length-1].assistance
      maxAttName.innerHTML = statistics[statistics.length-1].name
      minAtt.innerHTML = statistics[0].assistance
      minAttName.innerHTML = statistics[0].name

      let statisticsCap = result.sort(function(a, b) {
        return a.assistance - b.assistance 
      });

      maxCap.innerHTML = statisticsCap[statisticsCap.length-1].capacity
      maxCapName.innerHTML = statisticsCap[statisticsCap.length-1].name
  
    } catch (error) {
      console.log(error);
    }
  }
  
let urlApiUpcoming = "https://api-amazingevents.onrender.com/api/amazing-events?time=upcoming";

let eventUpcoming = document.getElementById("event-upcoming")

let tables = []

function tableUpcoming (cat, gan, porc)  {
  for (let i = 0; i < cat.length; i++) {
      let table = `<tr>
                   <td>${cat[i]}</td>
                   <td>$ ${gan[i]}</td>
                   <td>${porc[i]} %</td>
                   </tr>`
      tables.push(table)  
  }
  return tables.join('')
}

async function eventUpcomingApi() {
  try {
    let response = await fetch(urlApiUpcoming);

    let data = await response.json();

    let result = data.events;

    let categoria = []

    for (let event of result) {
      if (!categoria.includes(event.category)) {
          categoria.push(event.category);
      }
    }
   
    for (let event of result) {
      event.ganancia = event.estimate * event.price;
    }

    let ganancia = []
    let porc = []
    for(let cat of categoria){

      let ganTotal = 0
      let assisTotal = 0
      let capTotal = 0

      for(let event of result ){
        if(cat === event.category){
          ganTotal = event.ganancia + ganTotal
          assisTotal = event.estimate + assisTotal
          capTotal = event.capacity + capTotal
        }
       }
      ganancia.push(ganTotal)
      porc.push((assisTotal / capTotal * 100).toFixed(2))
    }

    eventUpcoming.innerHTML = tableUpcoming(categoria, ganancia, porc)

  } catch (error) {
    console.log(error);
  }
}

let urlApiPast = "https://api-amazingevents.onrender.com/api/amazing-events?time=past";

let eventPast = document.getElementById("event-past")

let tablesPast = []

function tablePast (cat, gan, porc)  {
  for (let i = 0; i < cat.length; i++) {
      let table = `<tr>
                   <td>${cat[i]}</td>
                   <td>$ ${gan[i]}</td>
                   <td>${porc[i]} %</td>
                   </tr>`
      tablesPast.push(table)  
  }
  return tablesPast.join('')
}

async function eventPastApi() {
  try {
    let response = await fetch(urlApiPast);

    let data = await response.json();

    let result = data.events;
    
    let categoria = []

    for (let event of result) {
      if (!categoria.includes(event.category)) {
          categoria.push(event.category);
      }
    }
   
    for (let event of result) {
      event.ganancia = event.assistance * event.price;
    }

    let ganancia = []
    let porc = []

    for(let cat of categoria){

      let ganTotal = 0
      let assisTotal = 0
      let capTotal = 0

      for(let event of result ){
        if(cat === event.category){
          ganTotal = event.ganancia + ganTotal
          assisTotal = event.assistance + assisTotal
          capTotal = event.capacity + capTotal
        }
       }
      ganancia.push(ganTotal)
      porc.push((assisTotal / capTotal * 100).toFixed(2))
    }

    eventPast.innerHTML = tablePast(categoria, ganancia, porc)

  } catch (error) {
    console.log(error);
  }
}

eventStatisticsApi()
eventUpcomingApi()
eventPastApi()

