(()=>{

    type Gender = 'M'|'F'
    //forma larga de hacer una clase
    /* class Person {
        public name : string;
        public gender : Gender;
        public birthdate : Date;

        constructor(name:string, gender:Gender, birthdate:Date){
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    } */
    //forma corta de hacer una clase
    class Person {
     
        constructor
        (
            public name:string, 
            public gender:Gender, 
            public birthdate:Date
        ){}
    }


    const newPerson = new Person('Carlos','M', new Date('1992-10-24'));
    console.log({newPerson})

})();