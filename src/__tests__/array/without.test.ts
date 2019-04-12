import without from '../../functions/array/without';

describe('without', () => {
  it('creates an array excluding all given value.', () => {
    // array
    expect(without([2, 1], [2, 3])).toEqual([1]);
    expect(without([2, 3, 4], [3, 50])).toEqual([2, 4]);
    expect(without(['a', 'b', 'c'], ['b', 'c', 'e'])).toEqual(['a']);
    expect(without(['x', 'x'], ['a', 'b', 'c'])).toEqual(['x', 'x']);
    expect(without(['x', 'b', 'b', 'b', 'c', 'e', 'y'], ['x', 'e'])).toEqual([
      'b',
      'b',
      'b',
      'c',
      'y'
    ]);
    expect(without(['a', 'b', 'b', 'b', 'b'], ['b'])).toEqual(['a']);
    expect(without(['a'], ['a', 'b', 'c'])).toEqual([]);

    // single item
    expect(without(['a', 'b', 'c'], 'a')).toEqual(['b', 'c']);
    expect(without(['a', 'b', 'c'], '1')).toEqual(['a', 'b', 'c']);
  });

  it('should return the first array if the second array is empty:', function() {
    expect(without(['a', 'b', 'c'], [])).toEqual(['a', 'b', 'c']);
  });
});
