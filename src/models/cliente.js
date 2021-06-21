// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');
 
// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');
 
// Cria tabela no BD e seus campos
const Supermercado = sequelize.define("supermercado", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    nomeProduto: {
        allowNull: false,
        type: Sequelize.STRING
    },
    descricaoProduto: {
        allowNull: false,
        type: Sequelize.STRING
    },
    precoProduto: {
        allowNull: false,
        type: Sequelize.FLOAT
    },
    quantidadeEstoque: {
        allowNull: false,
        type: Sequelize.INTEGER
    }
});
 
module.exports = Supermercado;