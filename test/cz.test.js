const cz = require('../lib/cz');

describe('commitizen', () => {
  it('exports prompter function', () => {
    if (typeof cz.prompter !== 'function') {
      throw new TypeError('Expected to export "prompter" function for Commitizen.');
    }
  });
});
