import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import course from "./curso.js"
import level from "./classe.js"
import period from "./periodo.js"
import room from "./sala.js"

const Class = connection.define('tb_class', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    description: {
        type: Sequelize.STRING(30),
        allowNull: true
    },
    course_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    level_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    period_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    room_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

Class.belongsTo(course, {foreignKey: 'course_id'})
Class.belongsTo(level, {foreignKey: 'level_id'})
Class.belongsTo(period, {foreignKey: 'period_id'})
Class.belongsTo(room, {foreignKey: 'room_id'})
// Class.sync({alter: true})

export default Class