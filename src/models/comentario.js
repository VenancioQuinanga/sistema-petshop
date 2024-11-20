import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import post from "./postagem.js"
import user from "./usuario.js"

const commemt = connection.define('tb_commemt', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    post_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    father_commemt_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    commemt: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    date: {
        type: Sequelize.DATE,
        allowNull: true
    }
})

commemt.belongsTo(user, {foreignKey: 'user_id'})
commemt.belongsTo(post, {foreignKey: 'post_id'})
commemt.belongsTo(commemt, {foreignKey: 'father_commment_id'})
// commemt.sync({alter: true})

export default commemt