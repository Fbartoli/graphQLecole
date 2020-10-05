const { gql } = require('apollo-server');
const typeDefs = gql`
  type School {
    identifiant_de_l_etablissement: String
    nom_etablissement: String
    type_etablissement: String
    statut_public_prive: String
    adresse_1: String
    adresse_2: String
    adresse_3: String
    code_postal: String
    code_commune: String
    nom_commune: String
    code_departement: String
    code_academie: String
    code_region: String
    ecole_maternelle: String
    ecole_elementaire: String
    voie_generale: String
    voie_technologique: String
    voie_professionnelle: String
    telephone: String
    fax: String
    web: String
    mail: String
    restauration: String
    hebergement: String
    ulis: String
    apprentissage: String
    segpa: String
    section_arts: String
    section_cinema: String
    section_theatre: String
    section_sport: String
    section_internationale: String
    section_europeenne: String
    lycee_Agricole: String
    lycee_militaire: String
    lycee_des_metiers: String
    post_BAC: String
    appartenance_Education_Prioritaire: String
    greta: Float
    siren_siret: String
    nombre_d_eleves: String
    fiche_onisep: String
    position: String
    type_contrat_prive: String
    libelle_departement: String
    libelle_academie: String
    libelle_region: String
    coordonnee_X: Float
    coordonnee_Y: Float
    epsg: String
    nom_circonscription: String
    latitude: Float
    longitude: Float
    precision_localisation: String
    date_ouverture: String
    date_maj_ligne: String
    etat: String
    ministere_tutelle: String
    etablissement_multi_lignes: Float
    rpi_concentre: Float
    rpi_disperse: String
    code_nature: Float
    libelle_nature: String
    code_type_contrat_prive: String
    pial: String
    etablissement_mere: String
    type_rattachement_etablissement_mere: String
  }

  type Query {
    schools(
      code_postal: String
      code_academie: String
      identifiant_de_l_etablissement: String
      type_etablissement: String
      page: Int
      limit: Int
      latitude: Float
      longitude: Float
      maxDistanceInKm: Float
    ): [School]
  }
`;

module.exports = typeDefs;
