import findUnique from '../../functions/array/findUnique';

describe('findUnique', () => {
  it('finds all unique value from given array.', () => {
    expect(findUnique([1, 2, 2, 3, 4, 5])).toEqual([1, 3, 4, 5]);
    expect(findUnique([1, 1, 2, 2, 3, 4, 4, 5, 7, 8, 9, 9])).toEqual([
      3,
      5,
      7,
      8
    ]);

    expect(findUnique(['a', 'a', 'b'])).toEqual(['b']);

    expect(findUnique([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
