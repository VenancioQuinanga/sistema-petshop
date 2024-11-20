import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import subject from "./disciplina.js"
import Class from "./turma.js"

const subject_class = connection.define('tb_subject_class', {
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
    }
})

subject_class.belongsTo(subject, {foreignKey: 'subject_id'})
subject_class.belongsTo(Class, {foreignKey: 'class_id'})
// subject_class.sync({alter: true})

export default subject_class