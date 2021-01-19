
/// <reference types="cypress"/>

describe('Localizando Elementos', function() 
    {

        it('Verificando tipos de locators', function()
            {
                //Abre o site com tamanho da dele especificado
                cy.visit('https://demo.nopcommerce.com/')    
                cy.viewport(1800,1300)                                                                          

                //Pesquisa um produto X
                cy.get("#small-searchterms").type("Apple MacBook Pro 13-inch")                                  
                
                //Clica no botão de pesquisar 
                cy.wait(2000)
                cy.get("[type='submit']").click()                                                                

                //Clica para adicionar ao carrinho
                cy.wait(2000)
                cy.get(".product-box-add-to-cart-button[value='Add to cart']").click()                             

                //Adiciona a quantidade de produtos
                cy.wait(2000)                    
                cy.get("#product_enteredQuantity_4").clear().type('2')                                          

                //Adiciona os produtos no carrinho
                cy.wait(2000)
                cy.get("#add-to-cart-button-4").click()                                                         
                
                //Clica para abrir o carrinho de compras
                cy.wait(5000)
                cy.get("#topcartlink > a > span.cart-label").click()                                            
                cy.wait(3000)

                //Validando valor
                cy.get(".product-unit-price").contains('$1,800.00')                                             
            }       
        )

    }
)