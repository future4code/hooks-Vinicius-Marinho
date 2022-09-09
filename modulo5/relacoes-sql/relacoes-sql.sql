CREATE TABLE Actor ( 
id VARCHAR(255) PRIMARY KEY, 
name VARCHAR (255) NOT NULL, 
birth_date DATE NOT NULL, 
gender VARCHAR(6) NOT NULL 
);

CREATE TABLE Movie ( 
id VARCHAR(255) PRIMARY KEY, 
title VARCHAR (255) NOT NULL UNIQUE, 
synopsis TEXT NOT NULL, 
release_date DATE NOT NULL,
rating INT NOT NULL
);


INSERT INTO Actor (id, name, birth_date, gender) 
VALUES( 
"001", 
"Tony Ramos", 
"1948-08-25", 
"male" 
);

INSERT INTO Actor (id, name, birth_date, gender)
VALUES(
  "002",
  "Juliana Paes",
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, name, birth_date, gender)
VALUES(
  "004", 
  "Antônio Fagundes",
  "1949-04-18", 
  "male"
);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES( 
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
7);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
"002",
"Doce de Mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
10);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
8);

INSERT INTO Movie (id, title, synopsis, release_date, rating) 
VALUES( 
"004", 
"Deus é Brasileiro", 
"Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
"2003-01-31", 
9 );

SELECT * FROM Movie;

SELECT * FROM Rating;

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

INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES  ("005", "Ótiom!", 10,"005");


ALTER TABLE Movie DROP COLUMN rating;

DELETE FROM Movie WHERE id = "001";

CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("004", "001"),
	  ("004", "002"),
      ("003", "003"),
      ("003", "004"),
      ("002", "001"),
      ("001", "004");

INSERT INTO MovieCast(movie_id, actor_id)
VALUES("005", "001");


DELETE FROM Actor WHERE id = "001";
      
SELECT m.title, m.id as movie_id, r.rate as rating FROM Movie as m
JOIN Rating as r ON m.id = r.movie_id;