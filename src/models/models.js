import user from './usuario.js';
import Class from './turma.js';
import transaction_material from './transacao_material.js';
import post from './postagem.js';
import post_type from './tipo_postagem.js';
import homework from './tarefa.js';
import room from './sala.js';
import teacher_class from './professor_turma.js';
import product from './produto.js';
import period from './periodo.js';
import lesson_material from './material_aula.js';
import scheduled_event from './evento_agendado.js';
import student_class from './estudante_turma.js';
import student_homework from './estudante_tarefa.js';
import statistic_assessment from './estatistica_avaliacao.js';
import address from './endereco.js';
import subject from './disciplina.js';
import subject_class from './disciplina_turma.js';
import course from './curso.js';
import commemt from './comentario.js';
import level from './classe.js';
import badge from './badge.js';
import category from './categoria.js';
import assessment from './avaliacao.js';
import lesson from './aula.js';
import homework_file from './arquivo_tarefa.js';
import material_file from './arquivo_material.js';

const models = {
  user,
  Class,
  transaction_material,
  post,
  post_type,
  homework,
  room,
  teacher_class,
  product,
  period,
  lesson_material,
  scheduled_event,
  student_class,
  student_homework,
  statistic_assessment,
  address,
  subject,
  subject_class,
  course,
  commemt,
  level,
  badge,
  category,
  assessment,
  lesson,
  homework_file,
  material_file
}

export default models