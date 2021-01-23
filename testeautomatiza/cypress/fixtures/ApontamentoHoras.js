/// <reference types="cypress"/>

//const urlFCteam     = "https://fcteam.fcamara.com.br/#/login";
const newNote       = "#header > nav > div.navbar-right > ul > li.ng-scope > button";
const saveNote      = "#tabNormal > form > div > div.form.ng-scope > div.form-group.btns-modal-appointment > button.btn.btn-default.inverse.ng-binding";
const clickClient   = "#tabNormal > form > div > div.form.ng-scope > div:nth-child(1) > div > div > div > a > span.select2-arrow.ui-select-toggle";
const clickProject  = "#tabNormal > form > div > div.form.ng-scope > div:nth-child(2) > div > div > div > a > span.select2-arrow.ui-select-toggle";

class Test {
    
//     openSite() {
//       cy.visit(urlFCteam);
//     }

//     loginUser(login, senha) {   
//         cy.wait(5000)
//         cy.get("[type='text']").type(login)
//         cy.get("[type='password']").type(senha)

//         cy.get("[type='submit']").click()
//     }

    newApointment() {  
        cy.wait(2500)
        cy.get(newNote).click()
    }

    selectClient(cliente) {
        
        cy.get(clickClient).click()
        cy.wait(1000)
        cy.contains(cliente).click()
    }

    selectProject (projeto) {
        cy.wait(2000)
        cy.get(clickProject).click()
        cy.contains(projeto).click( {force: true} )
    }

    inputHour(selectField, hora1) {      
        //Inicio
        cy.wait(1000)
        cy.get(selectField).type(hora1)    
    }

    saveNote(){
        //Salvar Apontamento
        cy.wait(1000)
        cy.get(saveNote).click()
        
    }

    selectFieldHour(selectField){
        return `#tabNormal > form > div > div.form.ng-scope > div:nth-child(6) > div:nth-child(2) > div > input:nth-child(${selectField})`;
    }

    lenghtRow(lenght){
        cy.wait(1500)
        cy.get('body > div.ng-scope > div > div:nth-child(2) > div > div:nth-child(4) > div > div > div > div > div:nth-child(2) > div > div > div > div').should('have.length', lenght)
    }

}

export default new Test();
