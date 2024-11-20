import user_seed from './usuario_seed.js';
import post_type_seed from './tipo_postagem_seed.js';
import room_seed from './sala_seed.js';
import period_seed from './periodo_seed.js';
import address_seed from './endereco_seed.js';
import subject_seed from './disciplina_seed.js';
import course_seed from './curso_seed.js';
import level_seed from './classe_seed.js';
import category_seed from './categoria_seed.js';

const runSeeds = async () => {
  try {
    await category_seed();
    await address_seed();
    await post_type_seed();
    await room_seed();
    await period_seed();
    await subject_seed();
    await course_seed();
    await level_seed();
    await user_seed();

    console.log('Seeds executados com sucesso!');
  } catch (error) {
    console.error('Erro ao executar seeds:', error);
  }
};

runSeeds();
