CREATE DATABASE  IF NOT EXISTS `devs`
DEFAULT CHARACTER SET utf8 ;
USE `devs`;

-- 27 Tabelas criadas

CREATE TABLE `categoria` (
  `id` int NOT NULL AUTO_INCREMENT,
  `categoria` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `endereco` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bairro` varchar(20) DEFAULT NULL,
  `rua` varchar(20) DEFAULT NULL,
  `casa` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `telefone` varchar(15) DEFAULT NULL,
  `senha` varchar(12) NOT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `data_nascimento` date DEFAULT NULL,
  `genero` varchar(20) DEFAULT NULL,
  `id_categoria` int DEFAULT NULL,
  `id_endereco` int DEFAULT NULL,
  `foto_perfil` varchar(255) DEFAULT NULL,
  `data_criacao` DATETIME DEFAULT CURRENT_TIMESTAMP,
  `data_atualizacao` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `pontuacao` INT DEFAULT 0,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`),
  FOREIGN KEY (`id_endereco`) REFERENCES `endereco` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `disciplina` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `curso` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `classe` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `periodo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `sala` (
  `id` int NOT NULL AUTO_INCREMENT,
  `numero` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `turma` (
  `id` int NOT NULL AUTO_INCREMENT,
  `descricao` varchar(30) DEFAULT NULL,
  `id_curso` int DEFAULT NULL,
  `id_classe` int DEFAULT NULL,
  `id_periodo` int DEFAULT NULL,
  `id_sala` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_curso`) REFERENCES `curso` (`id`),
  FOREIGN KEY (`id_classe`) REFERENCES `classe` (`id`),
  FOREIGN KEY (`id_periodo`) REFERENCES `periodo` (`id`),
  FOREIGN KEY (`id_sala`) REFERENCES `sala` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `disciplina_turma` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_disciplina` int DEFAULT NULL,
  `id_turma` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_disciplina`) REFERENCES `disciplina` (`id`),
  FOREIGN KEY (`id_turma`) REFERENCES `turma` (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `professor_turma` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_professor` int DEFAULT NULL,
  `id_turma` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_professor`) REFERENCES `usuario` (`id`),
  FOREIGN KEY (`id_turma`) REFERENCES `turma` (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `estudante_turma` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_estudante` int DEFAULT NULL,
  `id_turma` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_estudante`) REFERENCES `uzuario` (`id`),
  FOREIGN KEY (`id_turma`) REFERENCES `turma` (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `aula` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_disciplina` int DEFAULT NULL,
  `id_turma` int DEFAULT NULL,
  `id_professor` int DEFAULT NULL,
  `descricao` varchar(50) DEFAULT NULL,
  `data` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_disciplina`) REFERENCES `disciplina` (`id`),
  FOREIGN KEY (`id_turma`) REFERENCES `turma` (`id`),
  FOREIGN KEY (`id_professor`) REFERENCES `disciplina` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `material_aula` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_aula` int DEFAULT NULL,
  `titulo` varchar(30) DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `data` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_aula`) REFERENCES `aula` (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `arquivo_material` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_material` int DEFAULT NULL,
  `descricao` varchar(30) DEFAULT NULL,
  `link` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_material`) REFERENCES `material_aula` (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `tarefa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_aula` int DEFAULT NULL,
  `descricao` text DEFAULT NULL,
  `pontos` int DEFAULT NULL,
  `data` date DEFAULT NULL,
  `data_entrega` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_aula`) REFERENCES `aula` (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `arquivos_tarefa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_tarefa` int DEFAULT NULL,
  `descricao` varchar(30) DEFAULT NULL,
  `link` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_tarefa`) REFERENCES `tarefa` (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `estuadnte_tarefa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_tarefa` int NOT NULL,
  `id_estudante` int NOT NULL,
  `comentario` text DEFAULT NULL,
  `status` enum('completo', 'em progresso') DEFAULT 'em progresso',
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_tarefa`) REFERENCES `tarefa`(`id`),
  FOREIGN KEY (`id_estudante`) REFERENCES `usuario`(`id`)
);

CREATE TABLE `tipo_postagem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `tipo` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `postagem` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_professor` int NOT NULL,
  `id_tipo` int DEFAULT NULL,
  `id_turma` int DEFAULT NULL,
  `id_disciplina` int DEFAULT NULL,
  `titulo` varchar(30) DEFAULT NULL,
  `conteudo` TEXT NOT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_professor`) REFERENCES `usuario` (`id`),
  FOREIGN KEY (`id_tipo`) REFERENCES `tipo_postagem` (`id`),
  FOREIGN KEY (`id_turma`) REFERENCES `turma` (`id`),
  FOREIGN KEY (`id_disciplina`) REFERENCES `disciplina` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `comentario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_postagem` int NOT NULL,
  `id_usuario` int NOT NULL,
  `id_comentario_pai` int DEFAULT NULL,
  `comentario` TEXT NOT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_postagem`) REFERENCES `postagem` (`id`),
  FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`),
  FOREIGN KEY (`id_comentario_pai`) REFERENCES `comentario` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `avaliacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_professor` int DEFAULT NULL,
  `value` int DEFAULT NULL,
  `feedback` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`), 
  FOREIGN KEY (`id_professor`) REFERENCES `professor` (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `estatistica_avaliacao` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_professor` int NOT NULL,
  `data_avaliacao` date NOT NULL,
  `media_avaliacao` float NOT NULL, -- Média das avaliações por período --
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_professor`) REFERENCES `usuario`(`id`)
);

CREATE TABLE `badge` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_estudante` int DEFAULT NULL,
  `value` int DEFAULT NULL,
  PRIMARY KEY (`id`), 
  FOREIGN KEY (`id_estudante`) REFERENCES `estudante` (`id`),
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `produto` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int DEFAULT NULL,
  `nome` varchar(30) DEFAULT NULL,
  `descricao` varchar(30) DEFAULT NULL,
  `preco` decimal(6,2) NOT NULL,
  `status` enum('disponível', 'indisponível') DEFAULT NULL,
  PRIMARY KEY (`id`), 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `transacao_material` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_material` int NOT NULL,
  `id_vendedor` int NOT NULL,
  `id_comprador` int NOT NULL,
  `data` datetime DEFAULT CURRENT_TIMESTAMP,
  `preco` decimal(6,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`id_material`) REFERENCES `material_aula`(`id`),
  FOREIGN KEY (`id_comprador`) REFERENCES `usuario`(`id`),
  FOREIGN KEY (`id_vendedor`) REFERENCES `usuario`(`id`)
);

CREATE TABLE `evento_agendado` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(50) NOT NULL,
  `descricao` varchar(100) DEFAULT NULL,
  `data_inicio` datetime NOT NULL,
  `data_fim` datetime DEFAULT NULL,
  `tipo` enum('feriado', 'atividade', 'outro') NOT NULL,
  PRIMARY KEY (`id`)
);
