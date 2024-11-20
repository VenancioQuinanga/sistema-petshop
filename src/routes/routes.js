import homework_file_routes from './arquivo_tarefa_routes.js'
import material_file_routes from './arquivo_material_routes.js'
import lesson_routes from './aula_routes.js'
import assessment_routes from './avaliacao_routes.js'
import category_routes from './categoria_routes.js';
import badge_routes from './badge_routes.js'
import level_routes from './classe_routes.js'
import comment_routes from './comentario_routes.js'
import course_routes from './curso_routes.js'
import subject_class_routes from './disciplina_turma_routes.js'
import subject_routes from './disciplina_routes.js'
import address_routes from './endereco_routes.js'
import statistic_assessment_routes from './estatistica_avaliacao_routes.js'
import student_homework_routes from './estudante_tarefa_routes.js'
import student_class_routes from './estudante_turma_routes.js'
import scheduled_event_routes from './evento_agendado_routes.js'
import lesson_material_routes from './material_aula_routes.js'
import period_routes from './periodo_routes.js'
import post_routes from './postagem_routes.js'
import product_routes from './produto_routes.js'
import teacher_class_routes from './professor_turma_routes.js'
import room_routes from './sala_routes.js'
import homework_routes from './tarefa_routes.js'
import post_type_routes from './tipo_postagem_routes.js'
import transaction_material_routes from './transacao_material_routes.js'
import class_routes from './turma_routes.js'
import user_routes from './usuario_routes.js';

const routes = (app) => {
  app.use('/arquivo_material', material_file_routes);
  app.use('/arquivo_tarefa', homework_file_routes);
  app.use('/aula', lesson_routes);
  app.use('/avaliacao', assessment_routes);
  app.use('/badge', badge_routes);
  app.use('/categoria', category_routes);
  app.use('/classe', level_routes);
  app.use('/comentario', comment_routes);
  app.use('/curso', course_routes);
  app.use('/disciplina', subject_routes);
  app.use('/disciplina_turma', subject_class_routes);
  app.use('/endereco', address_routes);
  app.use('/estatistica_avaliacao', statistic_assessment_routes);
  app.use('/estudante_tarefa', student_homework_routes);
  app.use('/estudante_turma', student_class_routes);
  app.use('/evento_agendado', scheduled_event_routes);
  app.use('/material_aula', lesson_material_routes);
  app.use('/periodo', period_routes)
  app.use('/postagem', post_routes);
  app.use('/produto', product_routes);
  app.use('/professor_turma', teacher_class_routes);
  app.use('/sala', room_routes);
  app.use('/tarefa', homework_routes);
  app.use('/tipo_postagem', post_type_routes);
  app.use('/transacao_material', transaction_material_routes);
  app.use('/turma', class_routes);
  app.use('/usuario', user_routes);
};

export default routes;