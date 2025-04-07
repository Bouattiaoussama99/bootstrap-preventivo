// Elementi del form
const formElement = document.getElementById('form')
const emailInputElement = document.getElementById('email')
const promoElement = document.getElementById('promo')
const jobElement = document.getElementById('job')
const checkElement = document.getElementById('check')
const nameElement = document.getElementById('name')
const surnameElement = document.getElementById('surname')
const priceElement = document.getElementById('price')

let fullPrice = 0
let promoPrice = 0

formElement.addEventListener('submit', function (event) {

    // blocca invio del form
    event.preventDefault()
    console.log('submit del form')

    nameElement.classList.remove('is-invalid')
    surnameElement.classList.remove('is-invalid')
    jobElement.classList.remove('is-invalid')
    promoElement.classList.remove('is-invalid')
    


    // Controllo campi 
    const name = checkName(nameElement.value)
    if (name === false) {
        console.log("Nome non valido")
        nameElement.classList.add('is-invalid')
    }
    const surname = checkSurname(surnameElement.value)
    if (surname === false) {
        console.log("Cognome non valido")
        surnameElement.classList.add('is-invalid')
    }

    const job = checkJob(jobElement.value)
    if (job === false) {
        console.log("Lavoro non selezionato")
        jobElement.classList.add('is-invalid')
    }

    const promo = checkPromo(promoElement.value)
    if (promo === false) {
        console.log("Promo non valida")
        promoElement.classList.add('is-invalid')
    }

    // Calcolo preventivo
    const fullPrice = calcoloPrice(jobElement.value)
    console.log(fullPrice)

    // Calcolo preventivo con promo
    if (promo) {
        promoPrice = calcoloPromoPrice(fullPrice, promo)
        console.log(promoPrice)
        priceElement.innerHTML = promoPrice
    }
    else {
        priceElement.innerHTML = fullPrice
    }

})

// Funzione controllo inserimento lavoro
function checkJob(job) {
    if (job === '0') {
        return false
    }
    else {
        return true
    }
}

// Funzione per controllo nome
function checkName(name) {
    if (name.length >= 3) {
        return true
    }
    else {
        return false

    }
}

// Funzione per controllo cognome
function checkSurname(surname) {
    if (surname.length >= 3) {
        return true
    }
    else {
        return false
    }
}

// Funzione per controllo privacy
function checkPrivacy(check) {
    if (check == true) {
        return true
    }
    else {
        return false
    }
}

// Funzione per calcolo del prezzo finale
function calcoloPromoPrice(fullPrice, promo) {
    let promoPrice = 0
    let sconto = 0
    if (promo) {
        sconto = (fullPrice * 25) / 100
        promoPrice = fullPrice - sconto
    }
    return promoPrice
}

// Funzione per calcolo preventivo a prezzo pieno
function calcoloPrice(job) {
    let fullPrice = 0
    if (job === 'BE') {
        fullPrice = 20.50 * 10
    }
    else if (job === 'FE') {
        fullPrice = 15.30 * 10
    }
    else if (job === 'PA') {
        fullPrice = 33.60 * 10
    }
    return fullPrice
}

// Funzione per controllo promozioni
function checkPromo(promo) {
    if (promo === 'YHDNU32') {
        return true
    }
    else if (promo === 'JANJC63') {
        return true
    }
    else if (promo === 'PWKCN25') {
        return true
    }

    else if (promo === 'SJDPO96') {
        return true
    }

    else if (promo === 'POCIE24') {
        return true
    }
    else {
        return false
    }
}