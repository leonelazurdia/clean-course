//import axios from 'axios';

//esta es una CLASE ADAPTADORA, es buena practica cuando uso clases de terceros.

export class HttpClient {

     
    /* async get(url: string){
        const{data, status} = await axios.get(url)
        return{data,status};
    } */

    async get(url:string){

        //fetch sirve para hacer peticiones http
        const resp = await fetch(url);
        const data = await resp.json();

        return {data: data,stauts: resp.status}
    }
    

}