(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getActorsOfAMovie( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getTheActorBioById( id: string ) {
        console.log({ id });
    }
    
    // Crear una película
    interface Movie{
        cast: string[];
        descripcion:string;
        rating:number;
        title:string;
    }
    function createMovie({title, descripcion, rating, cast}: Movie ) {
        console.log({ title, descripcion, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }


    //continuar...

    //funcion mal estructurada
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;
    }

    //ejercicio resuelto: mejorar la funcion sin usar else.
    const getPayAmount2 = ({ isDead = false, isSeparated = true, isRetired = false }) => {
    
        if (isDead) return 1500;
         
        if ( isSeparated ) return 2500; 
    
        //uso de condicional ternario
        return isRetired ? 3000 : 4000;
    }


    


})();
