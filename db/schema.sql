DROP DATABASE IF EXISTS sdc;
CREATE DATABASE IF NOT EXISTS sdc;

/c sdc

CREATE TABLE IF NOT EXISTS listings (
  listing_id SERIAL PRIMARY KEY,
  price integer NOT NULL,
  rating decimal NOT NULL,
);
CREATE TABLE IF NOT EXISTS users (
  users_id SERIAL PRIMARY KEY,
  username VARCHAR(25) NOT NULL,
  email VARCHAR(50) NOT NULL,
  user_password VARCHAR(25) NOT NULL,
  user_ip VARCHAR(45) NOT NULL
)
CREATE TABLE IF NOT EXISTS mortgages (
  mortgage_id SERIAL PRIMARY KEY,
  mortgage_name VARCHAR(25) NOT NULL,
  terms text[] NOT NULL,
  fees integer NOT NULL,
  rate decimal NOT NULL,
  apr decimal NOT NULL,
  users_id integer NOT NULL REFERENCES users(users_id),
  listing_id integer NOT NULL REFERENCES listings(listing_id)
)
\COPY listings (listing_id, price, rating) FROM './db/listings.csv' WITH CSV HEADER DELIMITER ',';
\COPY users (usr_id, username, email, user_password, user_ip) FROM './db/users.csv' WITH CSV HEADER DELIMITER ',';
\COPY mortgages (mortgage_id, mortgage_name, terms, fees, rate, apr) FROM './db/mortgages.csv' WITH CSV HEADER DELIMITER ',';
