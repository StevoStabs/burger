/* 
This file is intended to help developers get their SQL Databases setup correctly.
It is important since other developers will be unlikely to have the same database or tables setup already. 
*/

CREATE DATABASE  burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`burger_name` VARCHAR( 255 ) NOT NULL,
	`devoured` BOOLEAN NOT NULL,
	PRIMARY KEY ( `id` ) 
);