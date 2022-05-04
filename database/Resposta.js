const Sequelize = require("sequelize");
const connection = require("./database");

//AQUI DEFINE O NOME, OS CAMPOS E TIPOS DA TABELA
const Resposta = connection.define("respostas",{
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    perguntaId: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

//Se já existe a tabela não criará uma nova tabela, caso contrario, criará a tabela
Resposta.sync({force: false});

module.exports = Resposta;