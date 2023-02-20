const inquirer = require('inquirer');
const fs = require('fs');
const bguMailer = require('./emailServerBGU');
const electricMailer = require('./emailServerIEC');
const postMailer = require('./emailServerIsraelPost');

const names = { BGU: 'bgu-personal-information', POST: 'il-post', IEC: 'electric company' };

const answerToFunction = {
    [names.BGU]: bguMailer,
    [names.POST]: postMailer,
    [names.IEC]: electricMailer,
}


const actions = {SEND: 'Send email template', ADD: 'Add new email adress'};
inquirer
    .prompt([
        {
            name: 'Actions',
            type: 'list',
            choices: Object.values(actions),
            message: 'Choose your action:'
        },
    ])
    .then(answer => {
        if(answer.Actions ==='Add new email adress'){
            
            inquirer.prompt([
                {
                    name: 'NewEMailAdress',
                    message: 'Enter email adress:'
                  },
            ])
            .then(answer => {
                console.log(answer.NewEMailAdress);
                fs.appendFile('utils/email-addresses.txt', '\n' + answer.NewEMailAdress, err => {
                    if(err){
                        throw err;
                    }
                });
            })
        }
        else {
            inquirer
                .prompt([
                    {
                        name: 'EmailTemplate',
                        type: 'list',
                        choices: Object.values(names),
                        message: 'Choose Email template?'
                    },
                ])
                .then(answer => {
                    answerToFunction[answer.EmailTemplate]()
                });
        }          
    });
