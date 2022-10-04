

export class Todo {

    static fromJson({ tarea, id, completado, creado }) {
        const instancia = new Todo( tarea )
        instancia.id         = id
        instancia.completado = completado
        instancia.creado     = creado

        return instancia;
    }

    constructor( tarea ) {

        this.tarea = tarea;
    
        this.id         = new Date().getTime();
        this.completado = false;
        this.creado     = new Date();
    }

    imprimirAlgo() {
        console.log(`${ this.tarea } - ${ this.id }`)
    }

}
