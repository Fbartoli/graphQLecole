const path = require('path');
const SchoolDb = require(path.resolve('src/db/index.js'));

describe('It should test the models methods', () => {
  it('should get 10 rows', async () => {
    const result = await SchoolDb.findAll();
    expect(result).toHaveLength(10);
  });
  it('should get 20 rows', async () => {
    const result = await SchoolDb.findAll(0, 20);
    expect(result).toHaveLength(20);
  });
  it('should get 10 next rows', async () => {
    const firstPage = await SchoolDb.findAll(10);
    const secondPage = await SchoolDb.findAll(10, 1);
    expect(firstPage).not.toEqual(secondPage);
  });
  it('should get a result by ID', async () => {
    const result = await SchoolDb.findById('0351667X');
    expect(result).toHaveLength(1);
    expect(result[0]['nom_etablissement']).toBe(
      'Ecole primaire publique la Vallée Verte',
    );
  });
  it('should return an empty list if ID is undefined', async () => {
    const result = await SchoolDb.findById();
    expect(result).toHaveLength(0);
    expect(result[0]).toBeUndefined();
  });
  it('should get a result by postal code', async () => {
    const result = await SchoolDb.findByPostalCode('06240');
    expect(result).toHaveLength(8);
  });
  it('should return an empty list if postal code is undefined', async () => {
    const result = await SchoolDb.findByPostalCode();
    expect(result).toHaveLength(0);
    expect(result[0]).toBeUndefined();
  });
});
