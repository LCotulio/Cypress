
/// <reference types="cypress"/>

describe('Localizando Elementos', function() 
    {
        it('Testando site da unimed', function()
            {
                
                //Acessar o site e verificar se o titulo é o esperado
                cy.visit("https://institucionaldev.unimed.coop.br/login")
                cy.viewport( 1300, 1800 )
                cy.title().should('eq', 'Gestão Institucional Unimed')

                //Área de login
                cy.get(".unicomp-campoTexto-sem-icone").type("39507870890")
                cy.get(".unicomp-campoTexto-icone-lado-direito").type("041290Lucas*")

                //Clicar para acessar a área de login
                cy.get(".primario").click()   
                
                
                cy.wait(5000)
                cy.get('body > div > main > div > div > div:nth-child(2) > div.col-12.col-md-8.col-lg-8.col-xl-null.align-self-start.offset-0.order-0 > div > div:nth-child(1) > div > div > div > div.corpo > div > div > div:nth-child(1) > div > div > div > svg').click()

            }
        )
    }
)