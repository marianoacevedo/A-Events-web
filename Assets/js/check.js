function captureCheck() {
    let checks = document.querySelectorAll('.check-cat') 

    let data = {
        [checks[0].name]: []
    }

    for (let cat of checks) {
        data[checks[0].name].push(cat.value)
    }

    console.log(data)
}
captureCheck()
