class Jugador {
    constructor(nombreJugador){
        this.nombreJugador = nombreJugador;
        this.puntuacion = 0;
    }

    getNombreJugador(){return this.nombreJugador;}
    getPuntuacion(){return this.puntuacion;}

    setNombreJugador(nombreJugador){ this.nombreJugador = nombreJugador;}
    setPuntuacion(puntuacion){this.puntuacion = puntuacion;}

    toString(){
        return this.nombreJugador + "<br>Puntuación: " + this.puntuacion;
    }
}