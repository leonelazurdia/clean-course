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
    }


    class User{
        public email: string;
        public lastAccess: Date;
        public role: string;

        constructor({email,role}:UserPropierties){
            
            this.lastAccess = new Date(),
            this. email = email,
            this.role = role
        }

        checkCredentials(){
            return true;
        }
    }

    interface SettingsPropierties {
        workingDirectory : string;
        lastOpenFolder   : string;
        }
    class Settings {
        public workingDirectory : string;
        public lastOpenFolder   : string;
        constructor
        ({  
            workingDirectory,
            lastOpenFolder,
        }: SettingsPropierties){
            this.workingDirectory = workingDirectory,
            this.lastOpenFolder = lastOpenFolder
        }
    }

    
    const settings = new Settings({
        lastOpenFolder: '/home',
        workingDirectory: '/usr/home',
    });
    console.log({ settings });

    interface UserSettingsPropierties {
        email: string;
        role: string;
        birthdate : Date;
        gender : Gender;
        name : string;
        workingDirectory : string;
        lastOpenFolder   : string;
    }

    //coposición que vincula las 3 clases anteriores
    class UserSettings{
        public person       : Person;
        public user         : User;
        public settings     : Settings;

        constructor({
            email,
            role,
            name,
            gender,
            birthdate,
            workingDirectory,
            lastOpenFolder,

        }: UserSettingsPropierties)
        {
            this.person = new Person({birthdate,gender,name});
            this.user = new User({email,role});
            this.settings = new Settings({lastOpenFolder,workingDirectory})

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

    console.log(userSettings.person);


    

})();