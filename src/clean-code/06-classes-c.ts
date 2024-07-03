(()=>{
    //Aplicando el principio de responsabilidad única
    //Priorizar la composición frente a la herencia 

    type Gender = 'M'|'F'
    
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

    const userSettings = new UserSettings({
        birthdate: new Date('1985-10-21'),
        email: 'fernando@google.com',
        gender: 'M',
        lastOpenFolder: '/home',
        name: 'Fernando',
        role: 'Admin',
        workingDirectory: '/usr/home',
    });

    console.log({ userSettings });

})();