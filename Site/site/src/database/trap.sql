create database Trap;

use Trap;

create table Usuario(
	idUsuario int primary key auto_increment,
	nome varchar(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

create table Musica(
	idMusica int primary key auto_increment,
	nomeMusica varchar(50),
	urlMusica varchar(100),
	vezesOuvida int
);