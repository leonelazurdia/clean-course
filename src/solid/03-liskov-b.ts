/*nota: 
La diferencia clave es que una interfaz solo define métodos sin implementación, obligando a las clases que
la implementan a definir esos métodos, mientras que una clase abstracta puede tener tanto métodos sin
implementar (abstractos) como métodos con implementación. Además, una clase puede implementar múltiples
interfaces, pero solo puede heredar de una clase abstracta.  */
export abstract class Vehicle{

    /* getNumberOfSeats():number{
        throw Error('Metodo no implementado');
    } */
   abstract name:string;
   abstract getNumerOfSeats():number;

} 

export class Tesla extends Vehicle {
    name: string = "Tesla";
    
    constructor( private numberOfSeats: number ) {
        super();
    }
    getNumerOfSeats(): number {
        return this.numberOfSeats;
    }
    
    
}

export class Audi extends Vehicle {
    name: string = "Audi";

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumerOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehicle {
    name: string = "Toyota";

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumerOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Honda extends Vehicle {
    name: string = "Honda";
    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumerOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Volvo extends Vehicle {
    name: string = "Volvo";

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumerOfSeats(): number {
        return this.numberOfSeats;
    }
}

