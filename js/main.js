"use strict";

let respuestaCorrecta;
let indexPregunta;
let jugadores = [];
let jugadorEnTurno = 1;

function muestraCategoria(){
    let categoria = preguntas[indexPregunta].getCategoria();
    let color;

    switch(categoria){
        case 'Geografía':  
            color = "#002DF9"; //azul
            break;
        case 'Entretenimiento':
            color = "#F900E3"; //rosa
            break;
        case 'Historia':
            color = "#F2F900"; //amarillo
            break;
        case 'Arte y Literatura':
            color = "#F90000"; //rojo
            break;
        case 'Ciencias y Naturaleza':    
            color = "#39F900"; //verde
            break;
        case 'Deportes y Pasatiempos':
            color = "#F99B00"; //naranja
            break;
        case 'Cultura popular':
            color = "#C800F9"; //purpura
            break;        
    }

    //Muestra la categoria
    document.getElementById("categoria").style.backgroundColor = color;
    document.getElementById("categoria").style.boxShadow = "0 0 15px 10px " + color;
    document.getElementById("categoria").innerHTML = preguntas[indexPregunta].getCategoria().toUpperCase();
}

function muestraPregunta(){   
    //De quién es el turno?
    //Resalta su casilla
    document.getElementById("jugador" + jugadorEnTurno).style.opacity = "1";

    //Borramos la solución de la respuesta anterior
    document.getElementById("respuesta").innerHTML = " ";

    //Mostramos el total de preguntas que hay
    let cantidadPreguntas = preguntas.length;

    //Escoge un número aleatorio de pregunta
    indexPregunta = Math.round(Math.random()*cantidadPreguntas);
    
    muestraCategoria();

    //Muestra la pregunta
    document.getElementById("pregunta").innerHTML = preguntas[indexPregunta].getPregunta();

    //Haremos un array con las respuestas en orden aleatorio sin que se repitan
    let ordenRespuestas = [1, 2, 3, 4];
    ordenRespuestas = ordenRespuestas.sort(function() {return Math.random() - 0.5});
    
    //Tenemos una variable global que almacena la respuesta correcta
    respuestaCorrecta=ordenRespuestas[0];

    //Ponemos todos los botones en negro y los habilitamos
    for(let i=1; i<5; i++){
        document.getElementById("botonRespuesta"+ i).style.backgroundColor = "#000";
        document.getElementById("botonRespuesta"+ i).style.color = "#fff";
        document.getElementById("botonRespuesta"+ i).disabled = false;
    }

    //Rellenamos los botones con las respuestas
    document.getElementById("botonRespuesta"+ ordenRespuestas[0]).value = preguntas[indexPregunta].getOptCorrecta();
    document.getElementById("botonRespuesta"+ ordenRespuestas[1]).value = preguntas[indexPregunta].getOptA();
    document.getElementById("botonRespuesta"+ ordenRespuestas[2]).value = preguntas[indexPregunta].getOptB();
    document.getElementById("botonRespuesta"+ ordenRespuestas[3]).value = preguntas[indexPregunta].getOptC();

    //Escondemos el botón de siguiente pregunta
    document.getElementById("siguientePregunta").disabled = true;
}


function respuestaJugador(respuesta){

    //Ponemos los colores de fondo rojo y verde en los botones respuesta
    document.getElementById("botonRespuesta"+ respuesta).style.backgroundColor = "#F90000";
    document.getElementById("botonRespuesta"+ respuestaCorrecta).style.backgroundColor = "#39F900";
    
    //El fondo del jugador activo lo ponemos otra vez transparente
    document.getElementById("jugador"+jugadorEnTurno).style.opacity = "0.5";

    if(respuesta == respuestaCorrecta){
        let puntuacion = jugadores[jugadorEnTurno-1].getPuntuacion();
        jugadores[jugadorEnTurno-1].setPuntuacion(puntuacion+1);  
        document.getElementById("nombreJugador"+(jugadorEnTurno)).innerHTML = jugadores[jugadorEnTurno-1];     
    }

    jugadorEnTurno ++; 
    
    if(jugadorEnTurno>jugadores.length){
        jugadorEnTurno = 1;
    }
    
    //Deshabilitamos los botones una vez contestada la pregunta
    for(let i=1; i<5; i++){
        document.getElementById("botonRespuesta"+ i).disabled = true;
    }

    document.getElementById("siguientePregunta").disabled = false;
}

function comienzaElJuego(){
    //Escondemos el botón de start
    document.getElementById("startGame").style.display = "none";

    //Escondemos los inputs para los jugadores
    document.getElementById("div_jugadores").style.display = "none";

    //Recogemos los nombres de los jugadores y los guardamos en la clase jugador (y en el array)
    let nomJugador;
    for(let i=1; i<5; i++){
        if(document.getElementById("inputJugador"+i).value!=""){
            nomJugador = new Jugador(document.getElementById("inputJugador"+i).value, 0);
            jugadores.push(nomJugador);
        }            
    }

    //Mostramos el juego
    document.getElementById("juego").style.display = "inline";

   muestraJugadores();
   muestraPregunta();
}

function muestraJugadores(){
    //Muestra los contadores de cada jugador
    if(jugadores.length>0){
        for(let i=0; i<jugadores.length; i++){
            document.getElementById("jugador"+(i+1)).style.display = "inline";
            document.getElementById("jugador"+(i+1)).style.opacity = "0.5";
            //Llamamos al toString
            document.getElementById("nombreJugador"+(i+1)).innerHTML = jugadores[i];
        }
    }
    
}