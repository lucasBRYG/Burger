DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    burgerID INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(35) NOT NULL,
    devoured BOOLEAN ,
    PRIMARY KEY (burgerID)
);