--\CREATE DATABASE matcha;

--\c matcha

CREATE TABLE IF NOT EXISTS users(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    age INTEGER
);

INSERT INTO users (user_id, name, age)
VALUES
(1,'aurelie', 31),
(2, 'francoise', 63),
(3, 'loan', 17),
(4, 'etienne', 55),
(5, 'marc', 43),
(6, 'marine', 35),
(7, 'louis', 32),
(8, 'joey', 65),
(9, 'geoffrey', 45),
(10, 'jislain', 15),
(11, 'adrien', 21),
(12, 'lucie', 16),
(13, 'lucette', 19),
(14, 'bertrand', 18),
(15, 'ginette', 21),
(16, 'paul', 17),
(17, 'mireille', 19),
(18, 'anna', 22),
(19, 'tom', 24),
(20, 'timothe', 23),
(21, 'luci', 33),
(22, 'lina', 32),
(23, 'pascal', 31),
(24, 'prudence', 36),
(25, 'martin', 34),
(26, 'flora', 32),
(27, 'leila', 37)