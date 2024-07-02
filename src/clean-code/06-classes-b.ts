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

    interface PersonPropierties {
        birthdate : Date;
        gender : Gender;
        name : string;

    }
    class Person {
        public birthdate:   Date;
        public gender:      Gender; 
        public name:        string; 
     
        constructor({birthdate, gender, name}:PersonPropierties)
        {
            this.birthdate = birthdate,
            this.gender = gender,
            this.name = name
        }
    }

    interface UserPropierties {
        email: string;
        role: string;
        birthdate : Date;
        gender : Gender;
        name : string;
    }


    class User extends Person{
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({email,role,birthdate,gender,name}:UserPropierties){
            super({birthdate, gender, name})
            this. email = email,
            this.lastAccess = new Date(),
            this.role = role
        }

        checkCredentials(){
            return true;
        }
    }

    interface UserSettingsPropierties {
        email: string;
        role: string;
        birthdate : Date;
        gender : Gender;
        name : string;
        workingDirectory : string;
        lastOpenFolder   : string;
    }


    class UserSettings extends User{
        public workingDirectory : string;
        public lastOpenFolder   : string;
        constructor
        ({
            email,
            role,
            name,
            gender,
            birthdate,
            workingDirectory,
            lastOpenFolder,

        }: UserSettingsPropierties){
            super({email,role, name, gender, birthdate})
            this.workingDirectory = workingDirectory,
            this.lastOpenFolder = lastOpenFolder
        }
    }

    const userSettings = new UserSettings( workingDirectory: 'user/home/','/home','mi@gmail.com','admin','Carlos','M',new Date('1992-05-24'))

    console.log({userSettings})

})();