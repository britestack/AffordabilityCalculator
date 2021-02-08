DROP DATABASE IF EXISTS sdc;
CREATE DATABASE sdc;

\c sdc

CREATE TABLE IF NOT EXISTS listings
(
  listing_id SERIAL PRIMARY KEY,
  price integer NOT NULL,
  rating decimal NOT NULL
);

CREATE TABLE IF NOT EXISTS users
(
  users_id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  user_password VARCHAR(25) NOT NULL,
  user_ip VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS mortgages
(
  mortgage_id SERIAL PRIMARY KEY,
  users_id integer NOT NULL,
  listing_id integer NOT NULL,
  mortgage_name VARCHAR(50) NOT NULL,
  terms VARCHAR(30) NOT NULL,
  fees integer NOT NULL,
  rate decimal NOT NULL,
  apr decimal NOT NULL,
  FOREIGN KEY (users_id) REFERENCES users (users_id) ON DELETE CASCADE,
  FOREIGN KEY (listing_id) REFERENCES listings (listing_id) ON DELETE CASCADE
);

\COPY listings FROM '/Users/jacky/Desktop/Workspace/SDC/AffordabilityCalculator/db/listings.csv' WITH CSV HEADER DELIMITER ',';
\COPY users  FROM '/Users/jacky/Desktop/Workspace/SDC/AffordabilityCalculator/db/users.csv' WITH CSV HEADER DELIMITER ',';
\COPY mortgages FROM '/Users/jacky/Desktop/Workspace/SDC/AffordabilityCalculator/db/mortgages.csv' WITH CSV HEADER DELIMITER ',';
