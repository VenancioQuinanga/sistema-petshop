import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"

const course = connection.define('tb_course', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(15),
        unique: true,
        allowNull: false
    }
})

// course.sync({alter: true})

export default course