/// <reference types="cypress"/>

const { should } = require("chai");



describe('UI Element', function(){
    it('Verificando imputbox & Radio buttons', function(){

        cy.visit("http://newtours.demoaut.com/");
        cy.url();should('include','newtours')

        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury")
        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury")

        cy.get('input[name=login]').should('be.visible').click()

        //Verificar titulo
        cy.title().should('eq','Find a Flight: Mercury Tours:')

        //Radio buttons
        
    })
})