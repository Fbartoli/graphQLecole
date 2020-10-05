const path = require('path');
const {
  filterByDistance,
  queryBuilder,
  isGeoLocationFilterOn,
} = require(path.resolve('src/helpers'));

module.exports = {
  Query: {
    schools: async (_, input, { SchoolDb }) => {
      var query = queryBuilder(input);
      let result = await SchoolDb.findQuery(query);
      if (isGeoLocationFilterOn(input))
        result = result.filter((x) => filterByDistance(x, input));
      return result;
    },
  },
};
