import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import user from "./usuario.js"

const statistic_assessment = connection.define('tb_statistic_assessment', {
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
    assessment_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    assessment: {
        type: Sequelize.FLOAT,
        allowNull: true
    }
})

statistic_assessment.belongsTo(user, {foreignKey: 'teacher_id'})
// statistic_assessment.sync({alter: true})

export default statistic_assessment