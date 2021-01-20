/// <reference types="cypress"/>
const urlFCteam = "https://fcteam.fcamara.com.br/#/login";

class Test {
    
    openSite() {
      cy.visit(urlFCteam);
    }

    loginUser(login, senha) {   
        cy.wait(5000)
        cy.get("[type='text']").type(login)
        cy.get("[type='password']").type(senha)

        cy.get("[type='submit']").click()
    }

    apointment() {  
        cy.wait(5000)
        cy.get('#header > nav > div.navbar-right > ul > li.ng-scope > button').click()
    }

    selectClient(cliente) {
        
        cy.get("#tabNormal > form > div > div.form.ng-scope > div:nth-child(1) > div > div > div > a > span.select2-arrow.ui-select-toggle").click()
        cy.wait(3000)
        cy.contains(cliente).click()
    }

    selectProject (projeto) {
        cy.wait(2000)
        cy.get("#tabNormal > form > div > div.form.ng-scope > div:nth-child(2) > div > div > div > a > span.select2-arrow.ui-select-toggle").click()
        cy.contains(projeto).click( {force: true} )
    }

    inputHour(hora1, hora2) {      
        //Inicio
        cy.wait(3000)
        cy.get('#tabNormal > form > div > div.form.ng-scope > div:nth-child(6) > div:nth-child(2) > div > input:nth-child(1)')
            .type(hora1)

        //Fim
        cy.get('#tabNormal > form > div > div.form.ng-scope > div:nth-child(6) > div:nth-child(2) > div > input:nth-child(2)')
        .type(hora2)

        //Salvar Apontamento
        cy.wait(1000)
        cy.get('#tabNormal > form > div > div.form.ng-scope > div.form-group.btns-modal-appointment > button.btn.btn-default.inverse.ng-binding').click()
    }
}

export default new Test();
