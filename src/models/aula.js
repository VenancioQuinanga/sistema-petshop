import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import user from "./usuario.js"
import Class from "./turma.js"
import subject from "./disciplina.js"

const lesson = connection.define('tb_lesson', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    subject_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    class_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    teacher_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    date: {
        type: Sequelize.DATEONLY,
        allowNull: true
    }
})

lesson.belongsTo(user, {foreignKey: 'user_id'})
lesson.belongsTo(Class, {foreignKey: 'class_id'})
lesson.belongsTo(subject, {foreignKey: 'subject_id'})
// lesson.sync({alter: true})

export default lesson 