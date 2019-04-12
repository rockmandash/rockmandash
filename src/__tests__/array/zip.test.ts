import zip from '../../functions/array/zip';

describe('zip', () => {
  it('zips arrays together.', () => {
    expect(zip([1, 2, 3])).toEqual([[1], [2], [3]]);

    expect(zip([1, 2, 3], ['a', 'b', 'c'])).toEqual([
      [1, 'a'],
      [2, 'b'],
      [3, 'c']
    ]);

    expect(zip([1, 2], ['a', 'b'], [true, false])).toEqual([
      [1, 'a', true],
      [2, 'b', false]
    ]);

    expect(zip([1, 2, 3], ['a', 'b'], [true])).toEqual([
      [1, 'a', true],
      [2, 'b', undefined],
      [3, undefined, undefined]
    ]);

    expect(zip([1, 2], ['a', 'b'])).toEqual([[1, 'a'], [2, 'b']]);

    expect(zip([1, 2], ['a', 'b'], [true, false])).toEqual([
      [1, 'a', true],
      [2, 'b', false]
    ]);

    expect(zip([])).toEqual([]);
    expect(zip([], [])).toEqual([]);
  });

  it('should throw error when passing invalid arguments.', () => {
    expect(() => {
      zip();
    }).toThrow();
  });
});
