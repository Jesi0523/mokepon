const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const inputSquirtle = document.getElementById('squirtle')
const inputBulbasaur = document.getElementById('bulbasaur')
const inputCharmander = document.getElementById('charmander')
const spanMascotaJugador = document.getElementById('mascota-jugador')

const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const sectionMensajes = document.getElementById('resultado')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

let squirtle = new Mokepon ('Squirtle', './imagenes pokemon/Squirtle.png', 5)

let bulbasaur = new Mokepon ('Bulbasaur', './imagenes pokemon/Bulbasaur.png', 5)

let charmander = new Mokepon ('Charmander', './imagenes pokemon/Charmander.png', 5)

mokepones.push(squirtle,bulbasaur,charmander)

console.log(mokepones)

function iniciarJuego() {
    
    sectionSeleccionarAtaque.style.display = 'none'

    
    sectionReiniciar.style.display = 'none'

    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    
    botonFuego.addEventListener('click', ataqueFuego)
    
    botonAgua.addEventListener('click', ataqueAgua)
    
    botonTierra.addEventListener('click', ataqueTierra)

    
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    
    sectionSeleccionarMascota.style.display = 'none'

    
    sectionSeleccionarAtaque.style.display = 'flex'

    

    if (inputSquirtle.checked) {
        spanMascotaJugador.innerHTML = 'Squirtle'
    } else if (inputBulbasaur.checked) {
        spanMascotaJugador.innerHTML = 'Bulbasaur'
    } else if (inputCharmander.checked) {
        spanMascotaJugador.innerHTML = 'Charmander'
    } else {
        alert("Seleccione una mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() { 
    let ataqueAleatorio = aleatorio(1, 3)

    if(ataqueAleatorio == 1) {
        spanMascotaEnemigo.innerHTML = 'Squirtle'
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Bulbasaur'
    } else {
        spanMascotaEnemigo.innerHTML = 'Charmander'
    }
}

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    
    if(ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }

    combate()
}

function combate() {
    

    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("EMPATE")
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') {
        crearMensaje("GANASTE")
        vidasEnemigo -= 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') {
        crearMensaje("GANASTE")
        vidasEnemigo -= 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') {
        crearMensaje("GANASTE")
        vidasEnemigo -= 1
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador -= 1
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("GANASTEE 🎉")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("Ya será a la próxima")
    }
} 

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    

    sectionMensajes.innerHTML = resultadoFinal

    
    botonFuego.disabled = true
    
    botonAgua.disabled = true
    
    botonTierra.disabled = true

    
    sectionReiniciar.style.display = 'block'
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function reiniciarJuego () {
    location.reload()
}

window.addEventListener('load', iniciarJuego)