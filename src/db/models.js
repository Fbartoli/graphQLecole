module.exports = function makeSchoolDb(makeClient) {
  return Object.freeze({
    findQuery,
  });
  async function findQuery(query) {
    let client = makeClient();
    return await queryDb(client, query);
  }
};

async function queryDb(client, query) {
  try {
    client.connect();
    var result = await client.query(query);
  } catch (error) {
    console.log(error);
  } finally {
    client.end();
  }
  return result.rows;
}
