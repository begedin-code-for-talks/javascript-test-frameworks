const sum = require('sum');
const assert = require('chai').assert;

describe('sum(a, b)', function () {
  it('returns a sum of two numbers', () => {
    assert.equal(sum(1, 2), 3);
  });

  it('returns NaN if both numbers are undefined', () => {
    // NaN != NaN, so we use isNaN
    assert.ok(isNaN(sum(undefined, undefined)));
  });

  it("doesn't care about order of numbers", () => {
    assert.equal(sum(1, 2), sum(2, 1));
  });

  it("can return a negative result", () => {
    assert.equal(sum(-2, -4), -6);
  });
});
