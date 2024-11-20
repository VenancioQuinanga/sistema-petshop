import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import lesson from "./aula.js"

const homework = connection.define('tb_homework', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    lesson_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    points: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    delivery_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
    }
})

homework.belongsTo(lesson, {foreignkey: 'lesson_id'})
// homework.sync({alter: true})

export default homework