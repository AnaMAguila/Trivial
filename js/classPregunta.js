class Pregunta{
    constructor(index, categoria, pregunta, optCorrecta, optA, optB, optC){
        this.index = index;
        this.categoria = categoria;
        this.pregunta = pregunta;
        this.optCorrecta = optCorrecta;
        this.optA = optA;
        this.optB = optB;
        this.optC = optC;
    }

    //GETTERS
    getIndex(){return this.index;}
    getCategoria(){return this.categoria;}
    getPregunta(){return this.pregunta;}
    getOptCorrecta(){return this.optCorrecta;}
    getOptA(){return this.optA;}
    getOptB(){return this.optB;}
    getOptC(){return this.optC;}

    //SETTERS
    setIndex(index){this.index = index;}
    setCategoria(categoria){this.categoria = this.categoria;}
    setPregunta(pregunta){this.pregunta = pregunta;}
    setOptCorrecta(optCorrecta){this.optCorrecta = optCorrecta;}
    setOptA(optA){this.optA = optA;}
    setOptB(optB){this.optB = optB;}
    setOptC(optC){this.optC = optC;}
}