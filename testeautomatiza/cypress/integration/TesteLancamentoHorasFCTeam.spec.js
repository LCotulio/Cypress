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
        Test.loginUser("passar email", "passar senha");
    });
        
    it('Novo Apontamento', () =>{ 
        Test.note();
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
        //Salvar apontamento
        Test.inputHour(Test.selectFieldHour("1") ,"08:00");
        Test.inputHour(Test.selectFieldHour("2") ,"12:00");
        //Salvar apontamento
        Test.saveNote();
    });
        
    it('Novo Apontamento', () =>{ 
        Test.note();
    });

    it('Lançar Horas - TARDE', function()
    {  
        //Salvar apontamento
        Test.inputHour(Test.selectFieldHour("1") ,"13:00");
        Test.inputHour(Test.selectFieldHour("2") ,"17:00");
        //Salvar apontamento
        Test.saveNote(); 
    });
});
