DROP DATABASE IF EXISTS sneakers_db;
CREATE DATABASE sneakers_db;

\c sneakers_db

CREATE TABLE sneakers (
    id SERIAL PRIMARY KEY,
    brand TEXT NOT NULL,
    model TEXT NOT NULL,
    price INTEGER,
    category TEXT,
    color TEXT, 
    is_favorite BOOL
);