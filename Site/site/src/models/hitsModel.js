var database = require("../database/config");

function buscarMusica(ipt_nomeMusica) {

    console.log("ACESSEI O AMBIENTE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar() \n\n ");
    var instrucao = `
   select * from Musica where nomeMusica = '${ipt_nomeMusica}';
    `;

    var instrucao2 = `
    update Musica set vezesOuvida = vezesOuvida+1 where nomeMusica = '${ipt_nomeMusica}';
     `;

    console.log("se der merda foi aqui")
    database.executar(instrucao2);

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function listar() {

    console.log("ACESSEI O AMBIENTE MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar() \n\n ");
   
    var instrucao = `select nomeMusica, vezesOuvida from Musica;`

    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 

module.exports = {
    buscarMusica,
    listar
}
