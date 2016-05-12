const sum = require('../src/sum');

describe('sum', function() {
  it('returns a sum of two numbers', () => {
    expect(sum(1, 2)).toBe(1 + 2);
  });

  it('returns NaN if both numbers are undefined', () => {
    // NaN != NaN, so we use isNaN
    expect(isNaN(sum(undefined, undefined))).toBe(true);
  });

  it("doesn't care about order of numbers", () => {
    expect(sum(1, 2)).toBe(sum(2, 1));
  });

  it("can return a negative result", () => {
    expect(sum(-2, -4)).toBe(-6);
  });
});
