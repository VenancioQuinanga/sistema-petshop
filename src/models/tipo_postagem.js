import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"

const post_type = connection.define('tb_post_type', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    type: {
        type: Sequelize.STRING(20),
        unique: true,
        allowNull: false
    }
})

// post_type.sync({alter: true})

export default post_type