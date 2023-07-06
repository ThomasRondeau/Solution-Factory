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



INSERT INTO `banque` (`id_banque`, `nom_banque`, `password`) VALUES (1, 'COFIDIS', 'default');
INSERT INTO `banque` (`id_banque`, `nom_banque`, `password`) VALUES (2, 'SOCIETE GENERALE', 'default');
INSERT INTO `banque` (`id_banque`, `nom_banque`, `password`) VALUES (3, 'BNP PARIBAS', 'default');
INSERT INTO `banque` (`id_banque`, `nom_banque`, `password`) VALUES (4, 'CREDIT AGRICOLE', 'default');
INSERT INTO `banque` (`id_banque`, `nom_banque`, `password`) VALUES (5, 'BANQUE POPULAIRE', 'default');
INSERT INTO `banque` (`id_banque`, `nom_banque`, `password`) VALUES (6, 'CIC', 'default');
INSERT INTO `banque` (`id_banque`, `nom_banque`, `password`) VALUES (7, 'LCL', 'default');
INSERT INTO `banque` (`id_banque`, `nom_banque`, `password`) VALUES (8, 'CREDIT LYONNAIS', 'default');
INSERT INTO `banque` (`id_banque`, `nom_banque`, `password`) VALUES (9, 'HSBC', 'default');