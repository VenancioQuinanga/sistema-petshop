import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import category from "./categoria.js"
import address from "./endereco.js"

const user = connection.define('tb_user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(30),
        allowNull: true
    },
    email: {
        type: Sequelize.STRING(30),
        allowNull: true
    },
    telephone: {
        type: Sequelize.STRING(15),
        allowNull: true
    },
    password: {
        type: Sequelize.STRING(100),
        allowNull: true
    },
    bio: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    birth_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
    },
    gender: {
        type: Sequelize.STRING(20),
        allowNull: true
    },
    profile_photo: {
        type: Sequelize.STRING(255),
        allowNull: true
    },
    points: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    category_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    address_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
})

user.belongsTo(category, {foreignKey: 'category_id'})
user.belongsTo(address, {foreignKey: 'address_id'})
// user.sync({alter: true})

export default user