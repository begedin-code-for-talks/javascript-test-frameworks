const sum = require('../src/sum');

describe('sum(a, b)', function () {
  it('returns a sum of two numbers', function() {
    assert.equal(sum(1, 2), 3);
  });

  it('returns NaN if both numbers are undefined', function() {
    // NaN != NaN, so we use isNaN
    assert.ok(isNaN(sum(undefined, undefined)));
  });

  it("doesn't care about order of numbers", function() {
    assert.equal(sum(1, 2), sum(2, 1));
  });

  it("can return a negative result", function() {
    assert.equal(sum(-2, -4), -6);
  });

  it.skip("can skip a test", function() {
    //this test is skipped
  });
});
