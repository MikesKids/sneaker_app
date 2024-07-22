DROP DATABASE IF EXISTS sneakers_prod;
CREATE DATABASE sneakers_prod;

\c sneakers_prod;

CREATE TABLE sneakers (
    id SERIAL PRIMARY KEY,
    brand TEXT NOT NULL,
    model TEXT NOT NULL,
    price INTEGER,
    category TEXT,
    color TEXT, 
    is_favorite BOOL
);