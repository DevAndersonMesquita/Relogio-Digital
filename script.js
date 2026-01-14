function Tempo() {
let data = new Date()
let horas = data.getHours()
let minutos = data.getMinutes()

if ( minutos < 10 ) {
        minutos = "0" + minutos
    }
    return horas + ":" + minutos 
}
document.getElementById("tempo").innerHTML = Tempo();
setInterval( function() {
    document.getElementById("tempo").innerHTML = Tempo();
}, 1000 );
