import chunk from '../../functions/array-string/chunk';

describe('chunk', () => {
  it('should divide Array into multiple chunks', () => {
    expect(chunk([0, 1, 2, 3, 4, 5], 1)).toEqual([
      [0],
      [1],
      [2],
      [3],
      [4],
      [5]
    ]);

    expect(chunk([0, 1, 2, 3, 4, 5], 3)).toEqual([[0, 1, 2], [3, 4, 5]]);

    expect(chunk([0, 1, 2, 3, 4, 5], 4)).toEqual([[0, 1, 2, 3], [4, 5]]);

    expect(chunk([0, 1, 2, 3, 4, 5], 5)).toEqual([[0, 1, 2, 3, 4], [5]]);
  });

  it('should divide string into multiple chunks', () => {
    expect(chunk('HelloWorld', 5)).toEqual(['Hello', 'World']);

    expect(chunk('HelloWorld', 3)).toEqual(['Hel', 'loW', 'orl', 'd']);

    expect(chunk('HelloWorld', 10)).toEqual(['HelloWorld']);

    expect(chunk('HelloWorld', 1)).toEqual([
      'H',
      'e',
      'l',
      'l',
      'o',
      'W',
      'o',
      'r',
      'l',
      'd'
    ]);
  });

  it('should throw error when passing invalid arguments', () => {
    expect(() => {
      chunk('HelloWorld', 5.5);
    }).toThrow();

    expect(() => {
      chunk('HelloWorld', 0);
    }).toThrow();

    expect(() => {
      chunk('HelloWorld', 11);
    }).toThrow();
  });
});
