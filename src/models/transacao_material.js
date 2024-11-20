import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import lesson_material from "./material_aula.js"
import user from "./usuario.js"

const transaction_material = connection.define('tb_transaction_material', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    material_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    seller_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    buyer_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    price: {
        type: Sequelize.DECIMAL(6,2),
        allowNull: true
    },
})

transaction_material.belongsTo(lesson_material, {foreignKey: 'material_id'})
transaction_material.belongsTo(user, {foreignKey: 'seller_id'})
transaction_material.belongsTo(user, {foreignKey: 'buyer_id'})
// transaction_material.sync({alter: true})

export default transaction_material