import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"

const room = connection.define('tb_room', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    number: {
        type: Sequelize.STRING(15),
        unique: true,
        allowNull: false
    }
})

// room.sync({alter: true})

export default room