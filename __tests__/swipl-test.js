const path = require('path');
const SWIPL = require('../dist').default;

describe('SWIPL', () => {
  it('should be a function', () => {
    expect(SWIPL).toBeInstanceOf(Function);
  });

  it('should return an object containing FS, prolog and locateFile keys', async () => {
    const mod = await SWIPL({});
    expect(mod.FS).toBeInstanceOf(Object);
    expect(mod.prolog).toBeInstanceOf(Object);
    expect(mod.locateFile).toBeInstanceOf(Function);
    expect(mod.locateFile('myfile.txt')).toEqual('myfile.txt');
    expect(mod.locateFile('swipl-web.data')).toEqual(path.join(__dirname, '..', 'dist', 'swipl', 'swipl-web.data'));
  });
});
