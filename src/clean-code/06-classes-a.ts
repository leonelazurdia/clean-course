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


    class User extends Person{
        public lastAccess: Date;
        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,

        ){
            super(name, gender, birthdate)
            this.lastAccess = new Date();
        }

        checkCredentials(){
            return true;
        }
    }

    class UserSettings extends User{
        constructor(
            public workingDirectory : string,
            public lastOpenFolder   : string,
            email                   : string,
            role                    : string,
            name                    : string,
            gender                  : Gender,
            birthdate               : Date,

        ){
            super(email,role, name, gender, birthdate)
        }
    }

    const userSettings = new UserSettings('user/home/','/home','mi@gmail.com','admin','Carlos','M',new Date('1992-05-24'))

    console.log({userSettings})

})();