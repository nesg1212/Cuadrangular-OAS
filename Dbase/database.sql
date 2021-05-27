CREATE DATABASE ng_teams_db;

USE ng_teams_db;

CREATE TABLE  teams(
    id INT(4) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(40),
    wins INT(8), 
    ties INT(8),
    loses INT(8)
);

DESCRIBE teams;