interface Bird{
    fly(): void;
    eat(): void;
    run(): void;
}

class Tucan implements Bird{

    public fly(){

    }

    public eat(){

    }
    public run(){

    }
}

class Humminbird implements Bird{
    public fly(){

    }

    public eat(){

    }

    public run(){

    }

}

class Ostrich implements Bird{
    fly(): void {
        throw new Error("Esta ave no buela.");// el avestruz no vuela aqui se violenta el principio de segregación de interfaces.
    }
    eat(): void {
        throw new Error("Method not implemented.");
    }
    run(): void {
        throw new Error("Method not implemented.");
    }

}