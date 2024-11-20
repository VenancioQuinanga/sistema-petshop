import connection from "../database/conexao.js"
import { Sequelize } from "sequelize"
import user from "./usuario.js"
import subject from "./disciplina.js"
import Class from "./turma.js"
import post_type from "./tipo_postagem.js"

const post = connection.define('tb_post', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    post_type_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    teacher_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    class_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    subject_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    title: {
        type: Sequelize.STRING(30),
        allowNull: true
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    date: {
        type: Sequelize.DATE,
        allowNull: true
    }
})

 
post.belongsTo(post_type, {foreignKey: 'post_type_id'})
post.belongsTo(user, {foreignKey: 'teacher_id'})
post.belongsTo(Class, {foreignKey: 'class_id'})
post.belongsTo(subject, {foreignKey: 'subject_id'})
// post.sync({alter: true})

export default post