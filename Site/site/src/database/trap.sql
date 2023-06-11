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
	urlMusica varchar(200),
	vezesOuvida int
);

INSERT INTO Usuario VALUES
(null, 'Breno', 'breno@gmail.com', '123456789');

INSERT INTO Musica VALUES
(null, 'Minha vida é um filme', 'https://www.youtube.com/embed/XxE7bZlyiNw', 5),
(null, '10K', 'https://www.youtube.com/embed/sRSc8trWDd0', 2),
(null, 'Engana dizendo que ama', 'https://www.youtube.com/embed/4Qta7cMSXc4', 2),
(null, 'Maturidade', 'https://www.youtube.com/embed/K9d5Tfdevt8', 4),
(null, 'Gorila roxo', 'https://www.youtube.com/embed/BUL7zecHZjA', 6);

select * from Usuario;

select * from Musica;

select * from Musica where nomeMusica = '10K';