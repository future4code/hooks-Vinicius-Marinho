SELECT * FROM Funcionários;

SELECT id AS "identifier", name FROM Funcionários;

SELECT * FROM Funcionários WHERE id = "001";

SELECT * FROM Funcionários WHERE name LIKE "%a%";

SELECT * FROM Funcionários WHERE name NOT LIKE "%r" AND email LIKE "%u%";