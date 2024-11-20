import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import user from "./usuario.js"
import homework from "./tarefa.js"

const student_homework = connection.define('tb_student_homework', {
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
    student_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    status: {
        type: Sequelize.ENUM(`completo`, `em progresso`),
        allowNull: true
    }
})

student_homework.belongsTo(user, {foreignKey: 'student_id'})
student_homework.belongsTo(homework, {foreignKey: 'homework_id'})
// student_homework.sync({alter: true})

export default student_homework