-- Drop the database if it exists
DROP DATABASE IF EXISTS travelifico_db;

-- Create the database
CREATE DATABASE travelifico_db;

-- Use the database
USE travelifico_db;

-- Table for cities
CREATE TABLE cities (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Table for dates
CREATE TABLE dates (
  id INT AUTO_INCREMENT PRIMARY KEY,
  date DATE NOT NULL
);

-- Table for food types
CREATE TABLE food_types (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Table for persons
CREATE TABLE persons (
  id INT AUTO_INCREMENT PRIMARY KEY,
  number INT NOT NULL
);

-- Table for restaurants
CREATE TABLE restaurants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  city_id INT,
  date_id INT,
  food_type_id INT,
  person_id INT,
  FOREIGN KEY (city_id) REFERENCES cities(id),
  FOREIGN KEY (date_id) REFERENCES dates(id),
  FOREIGN KEY (food_type_id) REFERENCES food_types(id),
  FOREIGN KEY (person_id) REFERENCES persons(id)
);

-- Table for reservations
CREATE TABLE reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  restaurant_id INT,
  user_id INT,
  reservation_date DATE NOT NULL,
  FOREIGN KEY (restaurant_id) REFERENCES restaurants(id),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Table for users
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  phoneNumber VARCHAR(255)
);
