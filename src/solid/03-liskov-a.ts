import { Tesla, Audi, Toyota, Honda, Volvo, Vehicle } from './03-liskov-b';


(() => {
    
    const printCarSeats = ( vehicles: (Vehicle)[] ) => {
        
        for (const vehicle of vehicles) {
            console.log(vehicle.name ,vehicle.getNumerOfSeats());
        }
    }
    
    const vehicles = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(4),
    ];


    printCarSeats( vehicles );

})();