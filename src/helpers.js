const hasFilterParameters = (input) => Object.keys(input).length > 0;
const isBlacklistedKey = (key) =>
  key != 'limit' &&
  key != 'page' &&
  key != 'latitude' &&
  key != 'longitude' &&
  key != 'maxDistanceInKm';
const filterByDistance = (x, input) => {
  let comparator = input['maxDistanceInKm'];
  if (comparator < 0) comparator = comparator * -1;
  let distance = getDistanceFromLatLonInKm(
    input.latitude,
    input.longitude,
    x.latitude,
    x.longitude,
  );
  return distance < comparator;
};
const isGeoLocationFilterOn = (input) => {
  return (
    input['latitude'] &&
    input['longitude'] &&
    input['maxDistanceInKm']
  );
};
function whereBuilder(input, values) {
  let text = '';
  let index = 1;
  Object.keys(input).forEach((key) => {
    if (input[key]) {
      if (isBlacklistedKey(key)) {
        if (index == 1) {
          text += ' WHERE';
        } else {
          text += ' AND';
        }
        text += ` "${key}" = $${index}`;
        values.push(input[key]);
        index++;
      }
    }
  });
  return text;
}
function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1); // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
    Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) *
    Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}
function deg2rad(deg) {
  return deg * (Math.PI / 180);
}
function queryBuilder(input) {
  var values = [];
  var text = 'SELECT * FROM public.school';
  if (hasFilterParameters) {
    text += whereBuilder(input, values);
  }
  return { text, values };
}

module.exports = {
  filterByDistance,
  queryBuilder,
  isGeoLocationFilterOn,
};
