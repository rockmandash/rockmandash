import union from '../../functions/array/union';

describe('union', () => {
  it('creates an array of unique values from all given arrays.', () => {
    expect(union([1, 2, 3, 4, 5], [3, 4, 5, 6, 7], [1, 2, 4, 6, 7])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]);

    expect(union([1, 2, 3, 4, 5], [6, 7, 8, 9, 10])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ]);
  });
});
