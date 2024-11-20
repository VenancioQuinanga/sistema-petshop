import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import homework from "./tarefa.js"

const homework_file = connection.define('tb_homework_file', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    homework_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING(30),
        allowNull: true
    },
    link: {
        type: Sequelize.TEXT,
        allowNull: true
    }
})

homework_file.belongsTo(homework, {foreignKey: 'homework_id'})
// homework_file.sync({alter: true})

export default homework_file