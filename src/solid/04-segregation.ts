interface Bird{
    eat(): void;  
}
interface FlyingBird{
    fly(): void;
}
interface RuningBird{
    run(): void;
}
interface SwimmingBird{
    run(): void;
}


class Tucan implements Bird, FlyingBird{
    public fly(){}
    public eat(){}
   
}

class Humminbird implements Bird, FlyingBird{
    public fly(){}
    public eat(){}
}

class Ostrich implements Bird, RuningBird{
    
    eat(): void {
        throw new Error("Method not implemented.");
    }
    run(): void {
        throw new Error("Method not implemented.");
    }
}

class Pinguin implements Bird, SwimmingBird{
    run(): void {
        throw new Error("Method not implemented.");
    }   
    eat(): void {
        throw new Error("Method not implemented.");
    }
}