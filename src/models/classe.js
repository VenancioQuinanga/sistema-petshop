import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"

const level = connection.define('tb_level', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(15),
        unique: true,
        allowNull: false
    }
})

// level.sync({alter: true})

export default level