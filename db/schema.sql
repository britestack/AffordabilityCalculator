DROP SCHEMA IF EXISTS affordabilityCalculator CASCADE;
CREATE SCHEMA IF NOT EXISTS affordabilityCalculator AUTHORIZATION sdc_user;

CREATE TABLE IF NOT EXISTS listings (
  listing_id SERIAL PRIMARY KEY,
  price integer,
  rating decimal,
);

COPY listings (listing_id, price, rating) FROM '/Users/jacky/Desktop/Workspace/SDC/AffordabilityCalculator/db/listings.csv';