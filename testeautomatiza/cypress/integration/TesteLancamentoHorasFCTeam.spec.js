import Test from "../fixtures/ApontamentoHoras.js";

/*
* TESTE LANÇAMENTO DE HORAS NO FCTEAM - FCamara
* @author: Lucas Cotulio
* @date: 2021-01-18
*/

describe("Quadro de horas FCTeam", () => 
{
    it('Abrir site', () =>{ 
        Test.openSite(); 
    });

    it('Usuário e senha', () =>{ 
        Test.loginUser("lucas.cotulio@fcamara.com.br", "041290Lucas");
    });
        
    it('Novo Apontamento', () =>{ 
        Test.apointment();
    });
    
    it('Selecionar cliente', function()
    {  
        Test.selectClient("Unimed Do Brasil");
    });

    it('Selecionar projeto', function()
    {  
        Test.selectProject("Reescrita Union");
    });

    it('Lançar Horas - MANHÃ', function()
    {  
        Test.inputHour("08", "12");
    });
        
    it('Novo Apontamento', () =>{ 
        Test.apointment();
    });
    
    it('Lançar Horas - TARDE', function()
    {  
        Test.inputHour("13", "17");
    }); 

});
