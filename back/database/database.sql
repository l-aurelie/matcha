--/ Memo, juste des queries a copier coller dans la db

CREATE TABLE IF NOT EXISTS users(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    age INTEGER
);
