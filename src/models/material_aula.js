import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import lesson from "./aula.js"

const lesson_material = connection.define('tb_lesson_material', {
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
    title: {
        type: Sequelize.STRING(30),
        allowNull: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: true
    }
})

lesson_material.belongsTo(lesson, {foreignKey: 'lesson_id'})
// lesson_material.sync({alter: true})

export default lesson_material