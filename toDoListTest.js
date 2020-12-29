var {User} = require("./toDoList");

/**
* Ce fichier toDoListTest importe la fonction constructrice User de mon fichier toDoList
* Elle me permet de tester chaque fonction définit dans le prototype de User 
*/


/**
* Cette fonction test la fonction validateFirstName
*/
const testFirstName = () => {
    
    let userMockTestFirstName = new User('edouard','gachet', 'edou05@gmail.com', '1d1c815b47', 21);

    return [
        userMockTestFirstName.validateFirstName(''),
        userMockTestFirstName.validateFirstName(9),
        userMockTestFirstName.validateFirstName(' '),
        userMockTestFirstName.validateFirstName(null),
        userMockTestFirstName.validateFirstName(undefined),
        userMockTestFirstName.validateFirstName(true),
        userMockTestFirstName.validateFirstName(false)
    ]
}


/**
* Cette fonction test la fonction validateLastName
*/
const testLastName = () => {

    let userMockTestLastName = new User('edouard','gachet', 'edou05@gmail.com', '1d1c815b47', 21);

    return [
        userMockTestLastName.validateLastName(''),
        userMockTestLastName.validateLastName(9),
        userMockTestLastName.validateLastName(' '),
        userMockTestLastName.validateLastName(null),
        userMockTestLastName.validateLastName(undefined),
        userMockTestLastName.validateLastName(true),
        userMockTestLastName.validateLastName(false)
    ]
}


/**
* Cette fonction test la fonction validateEmail
*/
const testEmail = () => {

    let userMockTestEmail = new User('edouard','gachet', 'edou05@gmail.com', '1d1c815b47', 21);

    return [
        userMockTestEmail.validateEmail(''),
        userMockTestEmail.validateEmail(9),
        userMockTestEmail.validateEmail(' '),
        userMockTestEmail.validateEmail(null),
        userMockTestEmail.validateEmail(undefined),
        userMockTestEmail.validateEmail('edou05gmail.com'),
        userMockTestEmail.validateEmail('edou05gmail'),
        userMockTestEmail.validateEmail('edou05@gmailcom'),
        userMockTestEmail.validateEmail('@gmail.com'),
        userMockTestEmail.validateEmail('edou05@'),
        userMockTestEmail.validateEmail('edou05.com'),
        userMockTestEmail.validateEmail('edou'),
        userMockTestEmail.validateEmail(true),
        userMockTestEmail.validateEmail(false)
    ]
}


/**
* Cette fonction test la fonction validatePassword
*/
const testPassword = () => {

    let userMockTestPassword = new User('edouard','gachet', 'edou05@gmail.com', '1d1c815b47', 21);

    return [
        userMockTestPassword.validatePassword(''),
        userMockTestPassword.validatePassword('eezrz'),
        userMockTestPassword.validatePassword(null),
        userMockTestPassword.validatePassword(undefined),
        userMockTestPassword.validatePassword(8),
        userMockTestPassword.validatePassword(45445),
        userMockTestPassword.validatePassword('eezrzrzoiezfz7fza4ea5z4e8a7za4d5sq4c84ez5r7z5vd4ds54w57azr7ghyjdgdfh7g8fdg7s8g'),
        userMockTestPassword.validatePassword(879846546546798484894648978654168489798486498798489798489986546),
        userMockTestPassword.validatePassword(true),
        userMockTestPassword.validatePassword(false)
    ]
}


/**
* Cette fonction test la fonction validateAge
*/
const testAge = () => {

    let userMockTestAge = new User('edouard','gachet', 'edou05@gmail.com', '1d1c815b47', 21);

    return [
        userMockTestAge.validateAge(''),
        userMockTestAge.validateAge('zzz'),
        userMockTestAge.validateAge(null),
        userMockTestAge.validateAge(undefined),
        userMockTestAge.validateAge(4),
        userMockTestAge.validateAge(8),
        userMockTestAge.validateAge(12),
        userMockTestAge.validateAge(true),
        userMockTestAge.validateAge(false)
    ]
}


/**
* Cette fonction test la fonction isValid
*/
const testIsValid = () => {

    let userMockTestIsValid1 = new User(null);
    let userMockTestIsValid2 = new User(undefined);
    let userMockTestIsValid3 = new User(null);
    let userMockTestIsValid4 = new User(4);
    let userMockTestIsValid5 = new User(8);
    let userMockTestIsValid6 = new User(12);
    let userMockTestIsValid7 = new User(true);
    let userMockTestIsValid8 = new User(false);
    let userMockTestIsValid9 = new User('edouard','gachet', 'edou05@gmail.com', '1d1c815b47', 1);
    let userMockTestIsValid10 = new User('edouard','gachet', 'edou05@gmail.com', '1d1c8', 19);
    let userMockTestIsValid11 = new User('edouard','gachet', 'edou05gmail.com', '1d1c815b47', 15);
    let userMockTestIsValid12 = new User('edouard','', 'edou05@gmail.com', '1d1c815b47', 15);
    let userMockTestIsValid14 = new User('edouard','gachet', 'edou05@gmail.com', '1d1c815bklzndflsnfklsjfljhaelfzef4z5f45sd4f5sd4f5s4df5sdf4s5dfsf47', 15);
    let userMockTestIsValid15 = new User('gachet', 'edou05gmail.com', '1d1c815b47', 15);
    let userMockTestIsValid16 = new User('edouard', 'gachet', 'edou05gmail.com', '1d1c815b47', 15);
    let userMockTestIsValid17 = new User('1d1c815b47', 15);
    let userMockTestIsValid18 = new User(15);
    let userMockTestIsValid19 = new User();
    let userMockTestIsValid21 = new User('edouard','gachet', 'edou05@gmail.com', '1d1c815b47', 1);
    let userMockTestIsValid22 = new User('edouard','gachet', 'edou05@gmail.com', '1d1c8', 15);
    let userMockTestIsValid23 = new User('edouard','gachet', 'edou05gmail.com', '1d1c815b47', 15);
    let userMockTestIsValid24 = new User('edouard','', 'edou05@gmail.com', '1d1c815b47', 15);
    let userMockTestIsValid25 = new User('','gachet', 'edou05@gmail.com', '1d1c815b47', 15);


    return [
        userMockTestIsValid1.isValid(),
        userMockTestIsValid2.isValid(),
        userMockTestIsValid3.isValid(),
        userMockTestIsValid4.isValid(),
        userMockTestIsValid5.isValid(),
        userMockTestIsValid6.isValid(),
        userMockTestIsValid7.isValid(),
        userMockTestIsValid8.isValid(),
        userMockTestIsValid9.isValid(),
        userMockTestIsValid10.isValid(),
        userMockTestIsValid11.isValid(),
        userMockTestIsValid12.isValid(),
        userMockTestIsValid14.isValid(),
        userMockTestIsValid15.isValid(),
        userMockTestIsValid16.isValid(),
        userMockTestIsValid17.isValid(),
        userMockTestIsValid18.isValid(),
        userMockTestIsValid19.isValid(),
        userMockTestIsValid21.isValid(),
        userMockTestIsValid22.isValid(),
        userMockTestIsValid23.isValid(),
        userMockTestIsValid24.isValid(),
        userMockTestIsValid25.isValid(),
    ]
}


/**
* Cette fonction test la fonction createToDoList
*/
const testCreateToDoList = () => {

    let userMockTestCreateToDoList1 = new User('edouard','gachet', 'edou05@gmail.com', '1d1c815b47', 14);
    userMockTestCreateToDoList1.isValid();


    return [
        userMockTestCreateToDoList1.createToDoList(),
        userMockTestCreateToDoList1.createToDoList('4'),
        userMockTestCreateToDoList1.createToDoList(4),
        userMockTestCreateToDoList1.createToDoList(true),
        userMockTestCreateToDoList1.createToDoList(false),
        userMockTestCreateToDoList1.createToDoList(undefined),
        userMockTestCreateToDoList1.createToDoList(null),
        userMockTestCreateToDoList1.createToDoList(''),
        userMockTestCreateToDoList1.createToDoList(' '),
    ]
}


/**
* Cette fonction test la fonction addItemToDoList
*/
const testAddItemDoList = () => {
    
    let userMockTestAddItem1 = new User('edouard','gachet', 'edou05@gmail.com', '1d1c815b47', 21);
    userMockTestAddItem1.isValid('edouard','gachet', 'edou05@gmail.com', '1d1c815b47', 15);
    userMockTestAddItem1.createToDoList('test');

    return [
        userMockTestAddItem1.addItemToDoList(),
        userMockTestAddItem1.addItemToDoList(),
        userMockTestAddItem1.addItemToDoList(),
        userMockTestAddItem1.addItemToDoList('eee'),
        userMockTestAddItem1.addItemToDoList('4'),
        userMockTestAddItem1.addItemToDoList('4', 'eeee'),
        userMockTestAddItem1.addItemToDoList('4', 'ee'),
        userMockTestAddItem1.addItemToDoList('5', 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'),
        userMockTestAddItem1.addItemToDoList(' ', 'ee'),
        userMockTestAddItem1.addItemToDoList('6', ' '),
        userMockTestAddItem1.addItemToDoList('test', '4'),
    ]
}

const testTimer = () => {
    
    let userMockTimer = new User('edouard','gachet', 'edou05@gmail.com', '1d1c815b47', 21);
    userMockTimer.isValid('edouard','gachet', 'edou05@gmail.com', '1d1c815b47', 15);
    userMockTimer.createToDoList('test');

    return [
        userMockTimer.addItemToDoList('test', 'eea'),
        userMockTimer.addItemToDoList('tests', 'eea'),
    ]
}

//console.log(userMockTest);
//console.log(testFirstName())
//console.log(testLastName())
//console.log(testEmail())
//console.log(testPassword())
//console.log(testAge())
//console.log(testIsValid())
//console.log(testCreateToDoList())
//console.log(testAddItemDoList())
//console.log(testTimer())