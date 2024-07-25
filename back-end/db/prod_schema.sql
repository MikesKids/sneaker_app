DROP DATABASE IF EXISTS sneaker-app-prod;
CREATE DATABASE sneaker-app-prod;

\c sneaker-app-prod;

CREATE TABLE sneakers (
    id SERIAL PRIMARY KEY,
    brand TEXT NOT NULL,
    model TEXT NOT NULL,
    price INTEGER,
    category TEXT,
    color TEXT, 
    is_favorite BOOL
);