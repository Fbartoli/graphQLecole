CREATE TABLE IF NOT EXISTS public.school (
  Identifiant_de_l_etablissement            VARCHAR,
  Nom_etablissement                         VARCHAR,
  Type_etablissement                        VARCHAR,
  Statut_public_prive                       VARCHAR,
  Adresse_1                                 VARCHAR,
  Adresse_2                                 VARCHAR,
  Adresse_3                                 VARCHAR,
  Code_postal                               VARCHAR,
  Code_commune                              VARCHAR,
  Nom_commune                               VARCHAR,
  Code_departement                          VARCHAR,
  Code_academie                             VARCHAR,
  Code_region                               VARCHAR,
  Ecole_maternelle                          VARCHAR,
  Ecole_elementaire                         VARCHAR,
  Voie_generale                             VARCHAR,
  Voie_technologique                        VARCHAR,
  Voie_professionnelle                      VARCHAR,
  Telephone                                 VARCHAR,
  Fax                                       VARCHAR,
  Web                                       VARCHAR,
  Mail                                      VARCHAR,
  Restauration                              VARCHAR,
  Hebergement                               VARCHAR,
  ULIS                                      VARCHAR,
  Apprentissage                             VARCHAR,
  Segpa                                     VARCHAR,
  Section_arts                              VARCHAR,
  Section_cinema                            VARCHAR,
  Section_theatre                           VARCHAR,
  Section_sport                             VARCHAR,
  Section_internationale                    VARCHAR,
  Section_europeenne                        VARCHAR,
  Lycee_Agricole                            VARCHAR,
  Lycee_militaire                           VARCHAR,
  Lycee_des_metiers                         VARCHAR,
  Post_BAC                                  VARCHAR,
  Appartenance_Education_Prioritaire        VARCHAR,
  GRETA                                     INTEGER,
  SIREN_SIRET                               VARCHAR,
  Nombre_d_eleves                           VARCHAR,
  Fiche_onisep                              VARCHAR,
  position                                  VARCHAR,
  Type_contrat_prive                        VARCHAR,
  Libelle_departement                       VARCHAR,
  Libelle_academie                          VARCHAR,
  Libelle_region                            VARCHAR,
  coordonnee_X                              FLOAT8,
  coordonnee_Y                              FLOAT8,
  epsg                                      VARCHAR,
  nom_circonscription                       VARCHAR,
  latitude                                  FLOAT8,
  longitude                                 FLOAT8,
  precision_localisation                    VARCHAR,
  date_ouverture                            VARCHAR,
  date_maj_ligne                            VARCHAR,
  etat                                      VARCHAR,
  ministere_tutelle                         VARCHAR,
  etablissement_multi_lignes                INTEGER,
  rpi_concentre                             INTEGER,
  rpi_disperse                              VARCHAR,
  code_nature                               INTEGER,
  libelle_nature                            VARCHAR,
  Code_type_contrat_prive                   VARCHAR,
  PIAL                                      VARCHAR,
  etablissement_mere                        VARCHAR,
  type_rattachement_etablissement_mere      VARCHAR
);

COPY public.school FROM '/data/fr-en-annuaire-education.csv' DELIMITER ';' CSV HEADER;