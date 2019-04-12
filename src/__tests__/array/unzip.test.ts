import unzip from '../../functions/array/unzip';
import zip from '../../functions/array/zip';

describe('unzip', () => {
  it('unzips arrays together.', () => {
    expect(unzip(zip([1, 2, 3]))).toEqual([[1, 2, 3]]);

    expect(unzip(zip([1, 2, 3], ['a', 'b', 'c']))).toEqual([
      [1, 2, 3],
      ['a', 'b', 'c']
    ]);

    expect(unzip(zip([1, 2], ['a', 'b'], [true, false]))).toEqual([
      [1, 2],
      ['a', 'b'],
      [true, false]
    ]);

    expect(unzip(zip([1, 2, 3], ['a', 'b'], [true]))).toEqual([
      [1, 2, 3],
      ['a', 'b'],
      [true]
    ]);

    expect(unzip(zip([1, 2], ['a', 'b']))).toEqual([[1, 2], ['a', 'b']]);

    expect(unzip(zip([1, 2], ['a', 'b'], [true, false]))).toEqual([
      [1, 2],
      ['a', 'b'],
      [true, false]
    ]);

    expect(unzip(zip([123]))).toEqual([[123]]);
  });

  it('should throw error when passing invalid arguments.', () => {
    expect(() => {
      unzip([]);
    }).toThrow();

    expect(() => {
      unzip(zip([]));
    }).toThrow();
  });
});
