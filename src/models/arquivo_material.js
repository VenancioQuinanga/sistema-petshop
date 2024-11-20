import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import lesson_material from "./material_aula.js"

const material_file = connection.define('tb_material_file', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    material_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING(30),
        allowNull: true
    },
    link: {
        type: Sequelize.TEXT,
        allowNull: true
    }
})

material_file.belongsTo(lesson_material, {foreignKey: 'material_id'})
// material_file.sync({alter: true})

export default material_file