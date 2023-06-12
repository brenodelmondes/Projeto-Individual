var hitsModel = require("../models/hitsModel");

function ouvir(req, res) {
    var ipt_nomeMusica = req.params.nomeMusica;
    
    hitsModel.buscarMusica(ipt_nomeMusica)
        .then(function (resultado) {
            if (resultado.length > 0) {
                console.log(resultado)
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
   ouvir
}