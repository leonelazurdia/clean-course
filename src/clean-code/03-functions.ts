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

    


})();
