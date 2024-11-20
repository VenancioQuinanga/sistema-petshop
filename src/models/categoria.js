import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"

const category = connection.define('tb_category', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    category: {
        type: Sequelize.STRING(20),
        unique: true,
        allowNull: false
    }
})

// category.sync({alter: true})

export default category