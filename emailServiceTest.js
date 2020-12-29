var {EmailService} = require("./toDoList");

/**
* Ce fichier emailServiceTest importe la fonction constructrice emailService de mon fichier toDoList
* Elle me permet de tester chaque fonction définit dans le prototype de emailService
*/


/**
* Cette fonction test la fonction sendEmail
*/
const testName = () => {
    
    let userMockTestEmailSerivce = new EmailService('edouard','gachet');

    return [
        // userMockTestEmailSerivce.sendEmail(''),
        // userMockTestEmailSerivce.sendEmail(9),
        // userMockTestEmailSerivce.sendEmail(' '),
        // userMockTestEmailSerivce.sendEmail(null),
        // userMockTestEmailSerivce.sendEmail(undefined),
        // userMockTestEmailSerivce.sendEmail(true),
        // userMockTestEmailSerivce.sendEmail(false),
        // userMockTestEmailSerivce.sendEmail(4, 4),
        // userMockTestEmailSerivce.sendEmail('4', '4'),
        // userMockTestEmailSerivce.sendEmail('ed', ''),
        // userMockTestEmailSerivce.sendEmail('', 'ed'),
        // userMockTestEmailSerivce.sendEmail(' ', 'ed'),
        // userMockTestEmailSerivce.sendEmail('ed', ' '),
        userMockTestEmailSerivce.sendEmail(' ', ' '),
    ]
}

console.log(testName())