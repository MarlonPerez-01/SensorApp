DROP DATABASE SistemaSensoresDB;
CREATE DATABASE SistemaSensoresDB;
USE SistemaSensoresDB;

/*temperatura y humedad*/

CREATE TABLE Ahuachapan (
  id int NOT NULL AUTO_INCREMENT,
  temperatura varchar(255) DEFAULT NULL,
  humedad varchar(255) DEFAULT NULL,
  fecha timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE Chalatenango (
  id int NOT NULL AUTO_INCREMENT,
  temperatura varchar(255) DEFAULT NULL,
  humedad varchar(255) DEFAULT NULL,
  fecha timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE SantaAna (
  id int NOT NULL AUTO_INCREMENT,
  temperatura varchar(255) DEFAULT NULL,
  humedad varchar(255) DEFAULT NULL,
  fecha timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);


CREATE TABLE Sonsonate (
  id int NOT NULL AUTO_INCREMENT,
  temperatura varchar(255) DEFAULT NULL,
  humedad varchar(255) DEFAULT NULL,
  fecha timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE SanMiguel (
  id int NOT NULL AUTO_INCREMENT,
  temperatura varchar(255) DEFAULT NULL,
  humedad varchar(255) DEFAULT NULL,
  fecha timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

/**luz*/

CREATE TABLE SanSalvador (
  id int NOT NULL AUTO_INCREMENT,
  luz varchar(255) DEFAULT NULL,
  fecha timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE Usulutan (
  id int NOT NULL AUTO_INCREMENT,
  luz varchar(255) DEFAULT NULL,
  fecha timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE Morazan (
  id int NOT NULL AUTO_INCREMENT,
  luz varchar(255) DEFAULT NULL,
  fecha timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE LaLibertad (
  id int NOT NULL AUTO_INCREMENT,
  luz varchar(255) DEFAULT NULL,
  fecha timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

CREATE TABLE LaPaz (
id int NOT NULL AUTO_INCREMENT,
  luz varchar(255) DEFAULT NULL,
  fecha timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);

