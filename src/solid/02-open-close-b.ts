// Hay que agregar la dependencia de axios ```npm install axios```
import axios from 'axios';
//hay fuerte dependencia de las clases a axios.


export class TodoService { 

    async getTodoItems() {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {

    async getPosts() {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {

    async getPhotos() {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}