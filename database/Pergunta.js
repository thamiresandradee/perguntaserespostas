const Sequelize = require("sequelize");
const connection = require("./database");

//AQUI DEFINE O NOME, OS CAMPOS E TIPOS DA TABELA
const Pergunta = connection.define('perguntas',{
    titulo:{
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao:{
        type: Sequelize.TEXT,
        allowNull: false
    }
});

//Se já existe a tabela não criará uma nova tabela, caso contrario, criará a tabela
Pergunta.sync({force: false}).then(() => {});