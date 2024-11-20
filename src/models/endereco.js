import connection from '../database/conexao.js'
import { Sequelize } from 'sequelize'

const address = connection.define('tb_address', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    neighborhood: {
        type: Sequelize.STRING(30),
        allowNull: true
    },
    street:{
        type: Sequelize.STRING(30),
        allowNull: true,
    },
    house:{
        type: Sequelize.STRING(20),
        allowNull: true,
    },
})

// address.sync({alter: true})

export default address