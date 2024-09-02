import { LocalDataBaseService, JsonDataBaseService, PostProvider } from "./05-dependency-c";

export interface Post {
    body:   string;
    id:     number;
    title:  string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];
    //inyeccion de dependencias es el antidoto ante la dependencia. (era lo que habia antes una fuerte dependencia)
    constructor(private postProvider: PostProvider) {}

    async getPosts() {
        //const jsonDB = new LocalDataBaseService();
        this.posts = await this.postProvider.getPosts();

        return this.posts;
    }
}