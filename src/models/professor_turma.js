import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import Class from "./turma.js"
import user from "./usuario.js"

const teacher_class = connection.define('tb_teacher_class', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    teacher_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    class_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

teacher_class.belongsTo(user, {foreignKey: 'teacher_id'})
teacher_class.belongsTo(Class, {foreignKey: 'class_id'})
// teacher_class.sync({alter: true})

export default teacher_class