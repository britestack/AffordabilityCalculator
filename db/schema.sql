DROP SCHEMA IF EXISTS affordabilityCalculator CASCADE;
CREATE SCHEMA IF NOT EXISTS affordabilityCalculator AUTHORIZATION sdc_user;

CREATE TABLE IF NOT EXISTS listings (
  listing_id SERIAL PRIMARY KEY,
  price integer,
  rating decimal,
);
CREATE TABLE IF NOT EXISTS users (
  usr_id SERIAL PRIMARY KEY,
  username VARCHAR(25),
  email VARCHAR(50),
  user_password VARCHAR(25),
  user_ip integer
)
CREATE TABLE IF NOT EXISTS mortgages (
  mortgage_id SERIAL PRIMARY KEY,
  mortgage_name VARCHAR(25),
  terms text[],
  fees integer,
  rate decimal,
  apr decimal
)
COPY listings (listing_id, price, rating) FROM './db/listings.csv';
COPY users (usr_id, username, email, user_password, user_ip) FROM './db/users.csv';
COPY mortgages (mortgage_id, mortgage_name, terms, fees, rate, apr) FROM './db/mortgages.csv';