/// <reference types="cypress"/>
const urlFCteam = "https://fcteam.fcamara.com.br/#/login";

class Test {
    /**
     * Open the website
     */
    openSite() {
      cy.visit(urlFCteam);
    }

    loginUser() {   
        cy.wait(5000)
        cy.get("[type='text']").type("lucas.cotulio@fcamara.com.br")
        cy.get("[type='password']").type("041290Lucas*")

        cy.get("[type='submit']").click()
    }

    apointment() {  
        cy.wait(5000)
        cy.get('#header > nav > div.navbar-right > ul > li.ng-scope > button').click()
    }

    selectClient() {
        
        cy.get("#tabNormal > form > div > div.form.ng-scope > div:nth-child(1) > div > div > div > a > span.select2-arrow.ui-select-toggle").click()
        cy.wait(2000)
        cy.contains("Unimed Do Brasil").click()
    }

    selectProject () {
        cy.wait(3500)
        cy.get("#tabNormal > form > div > div.form.ng-scope > div:nth-child(2) > div > div > div > a > span.select2-arrow.ui-select-toggle").click()
        cy.contains("Reescrita Union").click( {force: true} )
    }

    inputHourMorning() {
        //Inicio
        cy.wait(3500)
        cy.get('#tabNormal > form > div > div.form.ng-scope > div:nth-child(6) > div:nth-child(2) > div > input:nth-child(1)')
            .type('08')

        //Fim
        cy.get('#tabNormal > form > div > div.form.ng-scope > div:nth-child(6) > div:nth-child(2) > div > input:nth-child(2)')
        .type('12')

        //Salvar Apontamento
        cy.wait(2000)
        cy.get('#tabNormal > form > div > div.form.ng-scope > div.form-group.btns-modal-appointment > button.btn.btn-default.inverse.ng-binding').click()
    }

    inputHour(hora1, hora2) {      
        //Inicio
        cy.wait(3500)
        cy.get('#tabNormal > form > div > div.form.ng-scope > div:nth-child(6) > div:nth-child(2) > div > input:nth-child(1)')
            .type(hora1)

        //Fim
        cy.get('#tabNormal > form > div > div.form.ng-scope > div:nth-child(6) > div:nth-child(2) > div > input:nth-child(2)')
        .type(hora2)

        //Salvar Apontamento
        cy.wait(3000)
        cy.get('#tabNormal > form > div > div.form.ng-scope > div.form-group.btns-modal-appointment > button.btn.btn-default.inverse.ng-binding').click()
    }
}

export default new Test();