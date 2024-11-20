import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"

const scheduled_event = connection.define('tb_scheduled_event', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: Sequelize.STRING(50),
        allowNull: true
    },
    description: {
        type: Sequelize.STRING(100),
        allowNull: true
    },
    start_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    end_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    type: {
        type: Sequelize.ENUM(`feriado`, `atividade`, `outro`),
        allowNull: true
    }
})

// scheduled_event.sync({force: true})

export default scheduled_event