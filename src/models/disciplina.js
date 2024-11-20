import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"

const subject = connection.define('tb_subject', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(15),
        allowNull: true
    }
})

// subject.sync({alter: true})

export default subject