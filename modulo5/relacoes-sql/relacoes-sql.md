### EXECICIO 1
a) É a chave estabelece conexões entre as tabelas.

b) a query é:
```
CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

DROP TABLE Rating;

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES  ("001", "Mediano!", 5,"001"),
		("002", "bom!", 6,"002"),
		("003", "Muito bom!", 7,"003"),
		("004", "Ótiom!", 10,"004");

```

c) 17:00:55	INSERT INTO Rating (id, comment, rate, movie_id)  VALUES  ("005", "Ótiom!", 10,"005")	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`hooks-4313661-vinicius-marinho`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.156 sec


como o movie_id é uma foreign key, deve ser passado sempre um id que já existe.

d)a query é:
```
ALTER TABLE Movie DROP COLUMN rating;
        
```

e) 17:06:18	DELETE FROM Movie WHERE id = "001"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`hooks-4313661-vinicius-marinho`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.156 sec


Como o filme possui uma coluna relacionada a outra tabela, ele não pode ser excluido.

### EXERCICIO 2

a) A tabela MovieCast relaciona os filme com os atores que trabalham nela.

b) a query é:
```
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("004", "001"),
	  ("004", "002"),
      ("003", "003"),
      ("003", "004"),
      ("002", "001"),
      ("001", "004");

```

c) 17:19:27	INSERT INTO MovieCast(movie_id, actor_id) VALUES("005", "001")	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`hooks-4313661-vinicius-marinho`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))	0.157 sec


Como é uma foreign key, é necessário digita um id já existente.

d)17:21:27	DELETE FROM Actor WHERE id = "001"	Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`hooks-4313661-vinicius-marinho`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))	0.156 sec


Como o ator possui uma coluna relacionada a outra tabela, ele não pode ser excluido.

### Exercício 3

a)ON, determina se as colunas são iguais.

b)a query é:
```
 SELECT m.id as movie_id, r.rate as rating FROM Movie as m
JOIN Rating as r ON m.id = r.movie_id;
```