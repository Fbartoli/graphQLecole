const { gql } = require('apollo-server');

/**
 * Type Definitions for our Schema using the SDL.
 */
const typeDefs = gql`
  type School {
    id: ID
    name: String
    type: String
    status: String
    street: String
    postBox: String
    codePostal: String
    codeCity: String
    city: String
    codeCounty: String
    codeAcademy: String
    codeRegion: String
    kindergarten: String
    elementarySchool: String
    generalPath: String
    technologicalPath: String
    professionalPath: String
    phoneNumber: String
    faxNumber: String
    website: String
    mail: String
    catering: String
    accommodation: String
    ulis: String
    apprenticeship: String
    segpa: String
    artSection: String
    cinemaSection: String
    theaterSection: String
    sportSection: String
    internationalSection: String
    europeanSection: String
    agriculturalSchool: String
    militarySchool: String
    postBac: String
    priorityEducation: String
    greta: String
    sirenSiret: String
    studentsNumber: Number
    onisepSheet: String
    geolocation: String
    contractType: String
    countyName: String
    academyName: String
    regionName: String
    xCoordinates: Float
    yCoordinates: Float
    epsg: String
    districtName: String
    latitude: Float
    longitude: Float
    localisationPrecision: String
    openingDate: String
    majLigneDate: String
    condition: String
    supervisingMinistry: String
    etablissementMultiLignes: String
    concentratedRpi: String
    dispersedRpi: Number
    kindCode: Number
    kindCode: String
    privateContractTypeCode: Number
    PIAL: String
    headEstablishment: String
    headEstablishmentReattachment: String
    codeBassinFormation: Number
    libelleBassinFormation: String
  }

  type Query {
    schools: [Schools]
    school: School
  }
`;

module.exports = typeDefs;
