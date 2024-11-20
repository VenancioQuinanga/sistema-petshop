import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import user from "./usuario.js"

const assessment = connection.define('tb_assessment', {
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
    value: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    feeedback: {
        type: Sequelize.STRING(100),
        allowNull: true
    }
})

assessment.belongsTo(user, {foreignKey: 'teacher_id'})
// assessment.sync({alter: true})

export default assessment