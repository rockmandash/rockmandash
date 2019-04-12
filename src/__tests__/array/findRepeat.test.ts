import findRepeat from '../../functions/array/findRepeat';

describe('findRepeat', () => {
  it('finds all repeat values from given array.', () => {
    expect(findRepeat([1, 2, 2, 3, 4, 5])).toEqual([2]);
    expect(findRepeat([1, 1, 2, 2, 3, 4, 4, 5, 7, 8, 9, 9])).toEqual([
      1,
      2,
      4,
      9
    ]);

    expect(findRepeat(['a', 'a', 'b'])).toEqual(['a']);

    expect(findRepeat([1, 2, 3, 4, 5])).toEqual([]);
  });
});
