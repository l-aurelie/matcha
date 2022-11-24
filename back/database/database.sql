--\CREATE DATABASE matcha;

--\c matcha

CREATE TABLE IF NOT EXISTS users(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    age INTEGER
);
