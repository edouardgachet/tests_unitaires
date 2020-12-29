function User(firstName, lastName, email, password, age) {
    
    this.firstName = firstName,
    this.lastName = lastName
    this.email = email,
    this.password = password,
    this.age = age
}

function EmailService(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName
}

EmailService.prototype.sendEmail = (firstname, lastname) => {

    let verifyName;
    if(firstname != '' && isNaN(firstname) && firstname != undefined && firstname != null && lastname != '' && isNaN(lastname) && lastname != undefined && lastname != null){
        
        verifyName = true;
        return alert(
            'bonjour ' + firstname + ' ' + lastname + ',' + 
            'Vous avez déjà crée 8 items, vous ne pouvez en créer plus que 2',
        )
    }
    else{
        verifyName = false;
    }

    try{ return valid(verifyName, 'Le nom et prénom ne sont pas conformes'); } 
    catch(e) { return new Error(e); }
}


let valid = (result, message) => {
    if(result) return true;
    else throw message;
}


User.prototype.validateFirstName = firstname => {
    let verifyFirstName;

    if(firstname != '' && isNaN(firstname) && firstname != undefined) verifyFirstName = true;
    else verifyFirstName = false;

    try{ return valid(verifyFirstName, 'veuillez saisir un prénom'); } 
    catch(e) { return new Error(e); }
}

User.prototype.validateLastName = lastname => {
    let verifyLastName;

    if(lastname != '' && isNaN(lastname) && lastname != undefined) verifyLastName = true;
    else verifyLastName = false;
    
    try{ return valid(verifyLastName, 'veuillez saisir un nom'); } 
    catch(e) {return new Error(e); }
}

User.prototype.validateEmail = email => {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const verifyEmail = regexEmail.test(String(email).toLowerCase());
    
    try{ return valid(verifyEmail, 'veuillez saisir une adresse email valide'); } 
    catch(e) { return new Error(e); }
}

User.prototype.validatePassword = password => {
    let verifyPassword;
    if(password != null && password != undefined){
        if(password.length >= 8 && password.length <= 40 && password != '' && password != null && password != undefined) verifyPassword = true;
        else verifyPassword = false;
    }
    else{
        verifyPassword = false;
    }

    try{ return valid(verifyPassword, 'veuillez saisir un mot de passe'); } 
    catch(e) { return new Error(e); }
}

User.prototype.validateAge = age => {
    let verifyAge;
    if(age >= 13) verifyAge = true;
    else verifyAge = false;

    try{ return valid(verifyAge, 'veuillez saisir un age'); } 
    catch(e) { return new Error(e); }
}

User.prototype.isValid = function() {

    let verifyUserValid;

    let counter = 0
    let firstNamePresent;
    let lastNamePresent;
    let emailPresent;
    let passwordPresent;
    let agePresent;

    let verifValueUser = Object.values(this)

    verifValueUser.forEach(element => {
        if(element == '' || element == undefined || element == null) counter--;
        else counter++;
    });

    /**
    *   la variable counter === 5 si les paramêtre users : 'nom', 'prenom', 'email', 'password', 'age' sont différents de undefined 
    *   Si la variable counter != 5 alors renvoie une exception avec un message d'erreur spécifique
    */
    if(counter === 5)
    {
        /**
        *   Vérifie si le user à un prénom valide
        *   Si oui alors firstNamePresent = true
        *   Sinon, renvoie une exception spécifiant que le prénom n'est pas bon
        */
        if(this.validateFirstName(this.firstName) === true) firstNamePresent = true;
        else{
            firstNamePresent = false;

            try{ return valid(firstNamePresent, 'Votre user n\'a pas de prénom valide'); } 
            catch(e) { return new Error(e); }
        }

        /**
        *   Vérifie si le user à un nom valide
        *   Si oui alors lastNamePresent = true
        *   Sinon, renvoie une exception spécifiant que le nom n'est pas bon
        */
        if(this.validateLastName(this.lastName) === true) lastNamePresent = true;
        else{
            lastNamePresent = false;

            try{ return valid(lastNamePresent, 'Votre user n\'a pas de nom valide'); } 
            catch(e) { return new Error(e); }
        }

        /**
        *   Vérifie si le user à un email valide
        *   Si oui alors emailPresent = true
        *   Sinon, renvoie une exception spécifiant que l'email n'est pas bon
        */
        if(this.validateEmail(this.email) === true) emailPresent = true;
        else{
            emailPresent = false;
            
            try{ return valid(emailPresent, 'Votre user n\'a pas d\'email valide'); } 
            catch(e) { return new Error(e); }
        }

        /**
        *   Vérifie si le user à un password valide
        *   Si oui alors passwordPresent = true
        *   Sinon, renvoie une exception spécifiant que le password n'est pas bon
        */        
        if(this.validatePassword(this.password) === true) passwordPresent = true;
        else{
            passwordPresent = false;

            try{ return valid(passwordPresent, 'Votre user n\'a pas de password valide'); } 
            catch(e) { return new Error(e); }
        }

        /**
        *   Vérifie si le user à un age valide
        *   Si oui alors agePresent = true
        *   Sinon, renvoie une exception spécifiant que le age n'est pas bon
        */     
        if(this.validateAge(this.age) === true) agePresent = true;
        else{
            agePresent = false;

            try{ return valid(agePresent, 'Votre user n\'a pas d\'âge valide'); } 
            catch(e) { return new Error(e); }
        }

    }

    else if(counter < 5){
        verifyUserValid = false;

        try{ return valid(verifyUserValid, 'Votre user n\'est pas valide, il semble manquer un ou des paramètres, merci de vérifier'); } 
        catch(e) { return new Error(e); }
    }

    /**
    *   Vérifié si firstNamePresent && lastNamePresent && emailPresent ... sont différents de true
    *   Si oui alors verifyUserValid = false
    *   Si Non alors verifyUserValid = true
    */
    if(firstNamePresent != true || lastNamePresent != true || emailPresent != true || passwordPresent != true || agePresent != true) verifyUserValid = false;
    else verifyUserValid = true;

    /**
    *  Test la variable verifyUserValid
    */
    try{ return valid(verifyUserValid, 'L\'utilisateur a déjà une toDoList'); }
    catch(e){ return new Error(e); }
}

/*
* * ToDoListSerice 
*/

User.prototype.createToDoList = function(nameToDoList) {

    let createToDoList;
    let messageError;

    /**
     * Si le nom de la toDoList est une chaine de caractères non vide alors la condition est validé
     * Sinon createToDoList = false
     */
    if(nameToDoList != undefined && nameToDoList != '' && nameToDoList != null && isNaN(nameToDoList))
    {
        /**
        * Si le user est un user valide alors la condition est validé
        * Si le user n'est pas un user valide, retourne une exception avec l'erreur du user (mauvais prénom, nom, email...)
        */
        if(this.isValid()){ 
            /**
             * Si le user ne possède pas encore de toDoList en créer une
             * Si le user possède déjà une toDoList, renvoie une exception spécifiant que celle-ci a déjà été crée
             */
            if(!this.hasOwnProperty('toDoList')){
                this.toDoList = {
                    name: nameToDoList,
                    numberItem: 0,
                }
                return 'Votre toDoList a été crée';
            }
            else
            {
                messageError = 'Votre toDoList à déjà été crée';
            }

            try{
                return valid(createToDoList, messageError);
            } catch(e) {
                return new Error(e);
            }
        }
        try{
            return valid(createToDoList, this.isValid());
        } catch(e) {
            return new Error(e);
        }
    }
    /**
    * Si le nom de la toDoList est un chiffre ou un nombre createToDoList = false
    */
    else if(!isNaN(nameToDoList) && parseInt(nameToDoList))
    {
        messageError = 'Vous ne pouvez pas rentrer un chiffre comme nom de toDoList';
        createToDoList = false;
    }
    /**
    * Si le nom de la toDoList est un chiffre ou un nombre createToDoList = false
    */
    else{
        messageError = 'Veuillez saisir un nom pour votre toDoList';
        createToDoList = false;
    }

    /**
    *  Test la variable createToDoList
    */
    try{
        return valid(createToDoList, messageError);
    } catch(e) {
        return new Error(e);
    }
}

User.prototype.addItemToDoList = function(nameItem, contentItem) {

    let toDoListExist;
    let argsValid;
    let itemExist;
    let messageError;
    let timer;

    /**
    * Si les arguments passés en paramêtres de la méthode sont valide, alors la condition est vérifié
    * Sinon la variable toDoListExist est initialisé à false 
    */
    if(nameItem != undefined && nameItem != '' && nameItem != null && isNaN(nameItem) && contentItem != undefined && contentItem != '' && contentItem != null && isNaN(contentItem)){
        /**
        * Si le user possède bien une toDoList la condition est vérifié
        * Sinon la variable toDoListExist est initialisé à false 
        */
        if(this.hasOwnProperty('toDoList') === true){
            /** 
            * Si la propriété toDoList est différent de null, la condition est vérifié
            * Sinon la variable toDoListExist est initialisé à false 
            */
            if(this.toDoList != null){
                /**
                * Si la propriété numberItem de la toDoList est inférieur à 10, la condition est vérifié 
                * Sinon la variable toDoListExist est initialisé à false 
                */
                if(this.toDoList.numberItem <= 9){
                    /**
                    * Vérifie si la propriété contentItem est inférieur à 1000
                    */
                    if(contentItem.length <= 1000){
                        /**
                        * Si la propriété numberItem de la toDoList est strictement égal à 0, crée un nouvelle item en prennant en parametre nameItem comme nom et contentItem comme content
                        * Sinon vérifié si le nom saisie existe déjà dans les items existants
                        *   - Si Oui alors renvoie une exception avec un message d'erreur spécifiant qu'il n'est pas possible de créer 2 item du même nom
                        *   - Si Non alors crée un nouvelle item en prennant en parametre nameItem comme nom et contentItem comme content
                        */
                        if(this.toDoList.numberItem == 0){
                            if(this.countDown || !this.hasOwnProperty('countDown')){
                                this.toDoList.numberItem += 1;
                                this.startTimer();
                                this.toDoList['item' + this.toDoList.numberItem.toString()] = {
                                    name: nameItem,
                                    content: contentItem,
                                    date: new Date()
                                }
                                return 'Un item à bien été ajouté à votre toDoList'
                            }
                            else{
                                timer = false;
                            }
                            
                            try{
                                return valid(timer, 'Les créations d\'items doivent être espacés de 30min ');
                            } catch(e) {
                                return new Error(e);
                            }

                        }
                        else if(this.toDoList.numberItem == 7){
                            if(this.countDown || !this.hasOwnProperty('countDown')){
                                this.toDoList.numberItem += 1;
                                this.startTimer();
                                this.toDoList['item' + this.toDoList.numberItem.toString()] = {
                                    name: nameItem,
                                    content: contentItem,
                                    date: new Date()
                                }
    
                                let userSendEmail = new EmailService(this.firstName, this.lastName);
                                userSendEmail.sendEmail(this.firstName, this.lastName);
    
                                return 'Un item à bien été ajouté à votre toDoList'
                            }
                            else{
                                timer = false;
                            }
                            
                            try{
                                return valid(timer, 'Les créations d\'items doivent être espacés de 30min ');
                            } catch(e) {
                                return new Error(e);
                            }

                        }
                        else{
                            let checkName = Object.getOwnPropertyNames(this.toDoList).filter(word => word != 'numberItem' && word != 'toDoList' && word != 'name');
                            
                            for(elementName of checkName){
                                if(this.toDoList[elementName].name === nameItem){
                                    itemExist = false;
                                    break;
                                }
                                else{
                                    itemExist = true;
                                }
                            }

                            if(itemExist){
                                this.toDoList.numberItem += 1;
                                if(this.countDown || !this.hasOwnProperty('countDown')){
                                    this.startTimer();
                                    this.toDoList['item' + this.toDoList.numberItem.toString()] = {
                                        name: nameItem,
                                        content: contentItem,
                                        date: new Date()
                                    }
                                    return 'Un item à bien été ajouté à votre toDoList';
                                }
                                else{
                                    timer = false;
                                }
                                
                                try{
                                    return valid(timer, 'Les créations d\'items doivent être espacés de 30min ');
                                } catch(e) {
                                    return new Error(e);
                                }
                            }
                            else{
                                messageError = 'Un item portant ce nom existe déjà';
                            }

                            try{
                                return valid(toDoListExist, messageError);
                            } catch(e) {
                                return new Error(e);
                            }
                        }
                    }
                    else{
                        toDoListExist = false;
                    }

                    try{
                        return valid(toDoListExist, 'Votre item ne peut pas contenir plus de 1000 caractères');
                    } catch(e) {
                        return new Error(e);
                    }

                }
                else{
                    toDoListExist = false;
                }

                /**
                *  Test la variable toDoListExist
                */
                try{
                    return valid(toDoListExist, 'Vous ne pouvez pas créer plus de 10 items dans votre toDoList');
                } catch(e) {
                    return new Error(e);
                }
            }
            else{
                toDoListExist = false;

                /**
                *  Test la variable toDoListExist
                */
                try{
                    return valid(toDoListExist, 'Votre toDoList n\'a pas été crée');
                } catch(e) {
                    return new Error(e);
                }
            }

        }
        else toDoListExist = false;

        /**
        *  Test la variable toDoListExist 
        */
        try{
            return valid(toDoListExist, 'Vous n\'avez pas de toDoList');
        } catch(e) {
            return new Error(e);
        }
    }
    else{
        messageError = 'Veuillez saisir un nom et un contenu pour votre item';
        argsValid = false;
    }

    try{
        return valid(argsValid, messageError);
    } catch(e) {
        return new Error(e);
    }
}

User.prototype.startTimer = function() {

    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve(true);
        }, (10000 * 60) * 30);
    });

    this.countDown = false;

    promise.then(result => {
        this.countDown = true;
    })
}

module.exports = {User, EmailService};