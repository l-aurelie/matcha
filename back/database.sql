CREATE DATABASE matcha;

--\c matcha

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    age VARCHAR(255)
);