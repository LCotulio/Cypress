const el = require('./elements').ELEMENTS;

class Apointment {
    
    newApointmet() {  
        cy.wait(2500)
        cy.get(el.newApointment).click();
        cy.get(el.clickClient).click();
        cy.contains('Unimed Do Brasil').click();
        cy.get(el.clickProject).click()
        cy.contains('Reescrita Union').click();

        cy.get(el.saveApointment).click();
    }
}

export default new Apointment();