let urlApi1 = "https://api-amazingevents.onrender.com/api/amazing-events"

let captureCheck = document.getElementById("check-cat")

let checks = []

function cardCheck (check)  {
  for (let event of check) {
      let card =`<div class="check">
                 <input type="checkbox" class="check-cat" name="categoria" id="${event.category}" value="${event.category}">
                 <label class="categoria" for="${event.category}">${event.category}</label>
                 </div>`
      checks.push(card)  
  }
  return checks
}

async function checkApi(){
  try{
    let response = await fetch(urlApi1)
    
    let data = await response.json()

    let filterCat = cardCheck(data.events)

    let result = filterCat.filter((item,index)=>{
        return filterCat.indexOf(item) === index;
      })

    captureCheck.innerHTML = result.join('')
  }
  catch(error){
    console.log(error)
  }
}
checkApi()
