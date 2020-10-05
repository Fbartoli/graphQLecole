const path = require('path');

const makeClient = require(path.resolve('src/db/DBconnect'));
const makeSchoolDb = require(path.resolve('src/db/models'));
const SchoolDb = makeSchoolDb(makeClient);

module.exports = SchoolDb;
