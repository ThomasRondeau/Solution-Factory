CREATE DATABASE courtier;

CREATE TABLE contrat(
   id_contrat INT,
   montant INT,
   PRIMARY KEY(id_contrat)
);

CREATE TABLE client(
   id_client INT,
   nom VARCHAR(20),
   prenom VARCHAR(20),
   email VARCHAR(20),
   birthdate VARCHAR(20),
   password VARCHAR(20),
   ville VARCHAR(20),
   PRIMARY KEY(id_client)
);

CREATE TABLE banque(
   id_banque INT,
   password VARCHAR(20),
   PRIMARY KEY(id_banque)
);