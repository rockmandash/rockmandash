import intersperse from '../../functions/array-string/intersperse';

describe('intersperse', () => {
  it('should return a new array for empty array or single-item array', () => {
    // string vs string
    expect(intersperse('', 'A')).toBe('');
    expect(intersperse('B', 'A')).toBe('B');

    // array vs obj
    expect(intersperse([], 'A')).toEqual([]);
    expect(intersperse(['hello'], 'A')).toEqual(['hello']);
  });

  it('should return a new interspersed array', () => {
    // string vs string
    expect(intersperse('BBBB', 'A')).toBe('BABABAB');
    expect(intersperse('BB', 'A')).toBe('BAB');
    expect(intersperse('BBB', 'ABCD')).toBe('BABCDBABCDB');

    // array vs obj

    expect(intersperse([1, 2, 3], 'A')).toEqual([1, 'A', 2, 'A', 3]);
    expect(intersperse([1, 2, 5, 6], { hello: 'world' })).toEqual([
      1,
      { hello: 'world' },
      2,
      { hello: 'world' },
      5,
      { hello: 'world' },
      6
    ]);
  });
});
