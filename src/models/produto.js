import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import user from "./usuario.js"

const product = connection.define('tb_product', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    name: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING(30),
        allowNull: true
    },
    price: {
        type: Sequelize.DECIMAL(6,2),
        allowNull: true
    },
    status: {
        type: Sequelize.ENUM(`dísponivel`, `indísponivel`),
        allowNull: true
    }
})

product.belongsTo(user, {foreignKey: 'user_id'})
// product.sync({alter: true})

export default product