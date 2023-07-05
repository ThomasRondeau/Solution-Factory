CREATE DATABASE courtier;
USE courtier;

CREATE TABLE client(
   id_client INT AUTO_INCREMENT,
   nom VARCHAR(20),
   prenom VARCHAR(20),
   email VARCHAR(100),
   birthdate VARCHAR(20),
   password VARCHAR(100),
   ville VARCHAR(100),
   PRIMARY KEY(id_client)
);

CREATE TABLE banque(
   id_banque INT,
   nom_banque VARCHAR(100),
   password VARCHAR(100),
   PRIMARY KEY(id_banque)
);

CREATE TABLE contrat(
   id_contrat INT AUTO_INCREMENT,
   montant INT,
   duree INT,
   id_client INT,
   PRIMARY KEY(id_contrat),
   FOREIGN KEY (id_client) REFERENCES client(id_client)
);

CREATE TABLE relation_banque_client(
   id_client INT,
   id_contrat INT,
   id_banque INT,
   taux INT,
   FOREIGN KEY(id_client) REFERENCES client(id_client),
   FOREIGN KEY(id_contrat) REFERENCES contrat(id_contrat),
   FOREIGN KEY(id_banque) REFERENCES banque(id_banque),
   PRIMARY KEY(id_banque, id_contrat)
);