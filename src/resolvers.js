const path = require('path');
const {
  filterByDistance,
  queryBuilder,
  isGeoLocationFilterOn,
} = require(path.resolve('src/helpers'));

module.exports = {
  Query: {
    schools: async (_, input, { SchoolDb }) => {
      let limit = input['limit'] ? input['limit'] : 10;
      let page = input['page'] ? input['page'] * limit : 0;
      let countResult = result.length
      let query = queryBuilder(input);
      let result = await SchoolDb.findQuery(query);
      if (isGeoLocationFilterOn(input))
        result = result.filter((x) => filterByDistance(x, input));
      if (countResult > limit) {
        let newresult = result.slice(page, limit)
      }
      return newresult;
    },
  },
};
