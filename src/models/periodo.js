import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"

const period = connection.define('tb_period', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(15),
        unique: true,
        allowNull: true
    }
})

// period.sync({alter: true})

export default period