/// <reference types="cypress"/>

//const urlFCTeam = "https://fcteam.fcamara.com.br/#/login";
const baseUrl = "https://www.inmetrics.com.br/";

/*
*
* TESTE LANÇAMENTO DE HORAS NO FCTEAM - FCamara
* @author: Lucas Cotulio
* @date: 2021-01-18
*
*/

class Test {
    /**
     * Open the website
     */
    openSite() {
      cy.visit(baseUrl);
    }
  
    /**
     * Open the "Na Mídia" tab
     */
    accessNaMidia() {
      cy.contains("Na Mídia").click();
    }

    getSelectorsTitle(h) {
        return `.col-md-12 > h${h}`;
      }
    
}

export default new Test();