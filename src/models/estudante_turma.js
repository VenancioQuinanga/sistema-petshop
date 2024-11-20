import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import Class from "./turma.js"
import user from "./usuario.js"

const student_class = connection.define('tb_student_class', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    student_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    class_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

student_class.belongsTo(Class, {foreignKey: 'class_id'})
student_class.belongsTo(user, {foreignKey: 'user_id'})
// student_class.sync({alter: true})

export default student_class