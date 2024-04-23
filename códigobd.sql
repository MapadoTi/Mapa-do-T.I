CREATE DATABASE IF NOT EXISTS turma_a;
USE turma_a;

-- Tabela usuario
CREATE TABLE IF NOT EXISTS usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

-- Tabela login
CREATE TABLE IF NOT EXISTS login (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT NOT NULL,
    data_hora DATETIME NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

-- Tabela manutencao
CREATE TABLE IF NOT EXISTS manutencao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao TEXT NOT NULL,
    data_inicio DATETIME NOT NULL,
    data_fim DATETIME NOT NULL,
    usuario_id INT NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

-- Tabela cadastromanutencao
CREATE TABLE IF NOT EXISTS cadastromanutencao (
    id INT AUTO_INCREMENT PRIMARY KEY,
    manutencao_id INT NOT NULL,
    usuario_id INT NOT NULL,
    FOREIGN KEY (manutencao_id) REFERENCES manutencao(id),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

-- Select from usuario
SELECT * FROM usuario;

-- Select from login
SELECT * FROM login;

-- Select from manutencao
SELECT * FROM manutencao;

-- Select from cadastromanutencao
SELECT * FROM cadastromanutencao;
