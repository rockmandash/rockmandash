import xor from '../../functions/array/xor';

describe('xor', () => {
  it('creates an array of unique values based on all given arrays.', () => {
    expect(xor([2, 1], [2, 3])).toEqual([1, 3]);
    expect(xor([1, 2], [2, 1], [1, 2])).toEqual([]);
    expect(xor([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5])).toEqual([1, 4]);
  });
});
