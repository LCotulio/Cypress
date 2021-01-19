
/// <reference types="cypress"/>

describe('My test suit', function()
{
    it('Titulo da página - OK', function()
    {        
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq', 'nopCommerce demo store')
    })

    it('Titulo da página - Erro', function()
    {        
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq', 'nopCommerce store')
    })


})
