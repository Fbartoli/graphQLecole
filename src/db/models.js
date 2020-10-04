module.exports = function makeSchoolDb(makeClient) {
  return Object.freeze({
    findAll,
    findByPostalCode,
    findByAdministrativeDivisions,
    findById,
    // findByTypeofSchools,
  });
  async function findAll(page = 0, limit = 10) {
    let client = makeClient();
    let query = {
      text: 'SELECT * FROM public.school LIMIT $1 OFFSET $2',
      values: [limit, page * limit],
    };
    return await queryDb(client, query);
  }
  async function findById(id) {
    if (!id) {
      return [];
    }
    let client = makeClient();
    let query = {
      text:
        'SELECT * FROM public.school WHERE "identifiant_de_l_etablissement" = $1',
      values: [id],
    };
    return await queryDb(client, query);
  }
  async function findByPostalCode(postalCode, page = 0, limit = 10) {
    if (!postalCode) {
      return [];
    }
    let client = makeClient();
    let query = {
      text:
        'SELECT * FROM public.school WHERE "code_postal" = $1 LIMIT $2 OFFSET $3',
      values: [postalCode, limit, page * limit],
    };
    return await queryDb(client, query);
  }
  async function findByAdministrativeDivisions(
    AD,
    page = 0,
    limit = 10,
  ) {
    if (!AD) {
      return [];
    }
    let client = makeClient();
    let query = {
      text:
        'SELECT * FROM public.school WHERE "code_academie" = $1 LIMIT $2 OFFSET $3',
      values: [AD, limit, page * limit],
    };
    return await queryDb(client, query);
  }
  // async function findByTypeofSchools(TOS) {
  //   //
  // }
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
