console.log('Inizio js');
const preventivo = document.getElementById('preventivo');
const nome = document.getElementById('nome');
const cognome = document.getElementById('cognome');
const email = document.getElementById('email');
const tipoLavoro = document.getElementById('tipoLavoro');
const messaggio = document.getElementById('messaggio');
const sconto = document.getElementById('sconto');
const privacy = document.getElementById('privacy');
const tabellaRisultato = document.getElementById('tabella-risultato');


preventivo.addEventListener('submit', function(e) {
    event.preventDefault();
 
    let opzioneSelezionataText = tipoLavoro.options[tipoLavoro.selectedIndex].text;
    const oreLavoro = 10; 
    let prezzo = 0;
    let sconto_applicato = 0;

    if(tipoLavoro.value === 'backend') {
        prezzo = 20.50 * oreLavoro;
    } else if ( tipoLavoro.value === 'frontend') {
        prezzo =  15.30 * oreLavoro;
    } else if (tipoLavoro.value === 'analisi') {
        prezzo =  33.60 * oreLavoro;
    }
    let codiceSconto = [
        'YHDNU32',
        'JANJC63',
        'PWKCN25',
        'SJDPO96',
        'POCIE24',
    ];(let i = 0 ; i < codiceSconto.length; i++) {
        console.log(sconto.value)
        console.log(codiceSconto[i], 'Codice Sconto')
        if(sconto.value === codiceSconto[i]) {
            sconto_applicato = (prezzo * 25/100);
            prezzo = prezzo -  sconto_applicato;
        }
    }
    if(sconto_applicato === 0 && sconto.value != '') {
        sconto_applicato = 'Codice sconto non valido'
    }

    tabellaRisultato.removeAttribute('style');
    console.log('prezzo: ', prezzo);
    document.getElementById('prezzo').innerHTML = prezzo.toFixed(2) + '€';
    document.getElementById('email-preventivo').innerHTML = email.value;
    document.getElementById('tipo-preventivo').innerHTML = tipoLavoro.value;
    document.getElementById('sconto-preventivo').innerHTML = sconto.value;
    document.getElementById('sconto-applicato').innerHTML = sconto_applicato;
