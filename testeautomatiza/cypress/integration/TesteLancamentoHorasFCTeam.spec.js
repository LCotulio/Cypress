import Login from "../support/pages/login/index";
import Test from "../fixtures/ApontamentoHoras.js"
//import Apointment from "../support/pages/apontamento/index";

/*
* TESTE LANÇAMENTO DE HORAS NO FCTEAM - FCamara
* @author: Lucas Cotulio
* @date: 2021-01-18
*/

describe("Quadro de horas FCTeam", () => 
{
    it.only('Abrir site', () =>{ 
        Login.openSite();
    });

    it.only('Usuário e senha', () =>{ 
        Login.loginUser();
    });
        
    it.only('Novo Apontamento / Cliente / Projeto', () =>{ 
        Test.newApointment();
    });
    
    it.only('Selecionar cliente', function()
    {  
        Test.selectClient("Unimed Do Brasil")
    });

    it.only('Selecionar projeto', function()
    {  
        Test.selectProject("Reescrita Union");
    });

    it('Lançar Horas - MANHÃ', function()
    {  
        Test.inputHour(Test.selectFieldHour("1") ,"08:00");
        Test.inputHour(Test.selectFieldHour("2") ,"12:00");
        
        Test.saveNote();
    });
        
    it('Novo Apontamento', () =>{ 
        Test.note();
    });

    it('Lançar Horas - TARDE', function()
    {  
        Test.inputHour(Test.selectFieldHour("1") ,"13:00");
        Test.inputHour(Test.selectFieldHour("2") ,"17:00");
       
        Test.saveNote(); 
    });

    it('Verifica se inseriu a linha 2', function()
    {  
        Test.lenghtRow("2");
    });


});
