function captureData() {
    let name = document.getElementById('name')
    let email= document.getElementById('email')
    let message = document.getElementById('message')
    
    let data = {
        [name.name]: name.value,
        [email.name]: email.value,
        [message.name]: message.value
    }
    console.log(data)
}

let handleContact = (event) => { 
     event.preventDefault()     
     captureData()
}

let enviar = document.getElementById('enviar')
enviar.addEventListener('click', handleContact)
