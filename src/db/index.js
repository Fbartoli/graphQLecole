const makeClient = require('./DBconnect');
const makeSchoolDb = require('./models');
const SchoolDb = makeSchoolDb(makeClient);

module.exports = SchoolDb;
