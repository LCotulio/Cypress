//classe com os as ações da tela de LOGIN
//importando os elementos da classe ELEMENTS da pasta LOGIN

const el = require('./elements.js').ELEMENTS;

class Login {

    openSite() {
        cy.visit("https://fcteam.fcamara.com.br/#/login");
        cy.get("body > div.ng-scope > div > div > div:nth-child(2) > div").contains('FC Team - Your Timesheet Online.')
    }

    loginUser() {
        cy.wait(5000)
        cy.get(el.text).type("passar email")
        cy.get(el.password).type("passar senha")

        cy.get(el.submit).click()
    }
}

export default new Login();