const adder = require('./index');
const { expect } = require('chai');

describe('basic test', () => {
  it('expect to add 2 numbers', () => {
    const result = adder(1, 2);
    expect(result).to.equal(3);
  })
});
