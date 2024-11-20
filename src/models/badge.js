import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import user from "./usuario.js"

const badge = connection.define('tb_badge', {
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
    value: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

badge.belongsTo(user, {foreignKey: 'user_id'})
// badge.sync({alter: true})

export default badge