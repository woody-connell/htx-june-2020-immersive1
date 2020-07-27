-- CREATE TABLE author (
--   id SERIAL PRIMARY KEY,
--   name varchar(25)

-- );

--reference author; one to many; articles is the many
-- CREATE TABLE articles (
--   id SERIAL PRIMARY KEY,
--   title varchar(150),
--   author_id integer REFERENCES author(id)
-- );

-- INSERT INTO author VALUES
-- (DEFAULT, 'Jeremy'),
-- (DEFAULT, 'Michael'),
-- (DEFAULT, 'RJ'),
-- (DEFAULT, 'Woody'),
-- (DEFAULT, 'Dan'),
-- (DEFAULT, 'Daniel'),
-- (DEFAULT, 'Cainan'),
-- (DEFAULT, 'Chris'),
-- (DEFAULT, 'Micah');

-- INSERT INTO articles VALUES
-- (DEFAULT, 'JS Prototypes', 1),
-- (DEFAULT, 'JS Promises', 1),
-- (DEFAULT, 'Express Routes', 1),
-- (DEFAULT, 'Styling with Bootstrap 4', 2),
-- (DEFAULT, 'API call with Google Maps', 2),
-- (DEFAULT, 'Python RPG Game', 5),
-- (DEFAULT, 'What is NumPy', 5),
-- (DEFAULT, 'OOP in Python vs JS', 4),
-- (DEFAULT, 'The Big O: Nested For Loops', 4),
-- (DEFAULT, 'Preparing for Technical Interviews', 9),
-- (DEFAULT, 'Gaming in JS using Phaser.io', 8),
-- (DEFAULT, 'FizzBuzz - The Solution', 3),
-- (DEFAULT, 'Coding in Russian', 6);

-- INSERT INTO author VALUES (
--   DEFAULT, 'JJ Watt'
-- );

-- SELECT author.id AS author_id, article, name

-- SELECT * FROM articles;

-- SELECT 
--   title, name 
-- FROM
--   author
-- INNER JOIN
--   articles ON author.id = articles.author_id;

CREATE TABLE groups (
  id SERIAL PRIMARY KEY,
  name varchar(100)

);

INSERT INTO groups VALUES
(DEFAULT, 'Houston Javascript Meetup'),
(DEFAULT, 'PyLadies'),
(DEFAULT, 'Girl Develop It'),
(DEFAULT, 'Houston Web Design Group');

CREATE TABLE member (
  id SERIAL PRIMARY KEY,
  member varchar(50)
);

INSERT INTO groups VALUES
(DEFAULT, 'Jeremy'),
(DEFAULT, 'Michael'),
(DEFAULT, 'RJ'),
(DEFAULT, 'Woody'),
(DEFAULT, 'Dan'),
(DEFAULT, 'Daniel'),
(DEFAULT, 'Cainan'),
(DEFAULT, 'Chris'),
(DEFAULT, 'Micah');

CREATE TABLE membership (
  id SERIAL PRIMARY KEY,
  group_id integer REFERENCES groups(id),
  member_id integer REFERENCES member(id)
);


INSERT INTO membership VALUES 
(DEFAULT, ),