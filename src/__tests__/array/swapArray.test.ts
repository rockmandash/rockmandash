import swapArray from '../../functions/array/swapArray';

describe('swapArray', () => {
  it('should swap two array elements based on given indexes.', () => {
    let arr = ['a', 'b', 'c'];
    let arr2 = [
      { hello: 'world1' },
      { hello: 'world2' },
      { hello: 'world3' },
      { hello: 'world4' }
    ];

    swapArray(arr, 0, 2);

    expect(arr).toEqual(['c', 'b', 'a']);

    swapArray(arr2, 1, 3);

    expect(arr2).toEqual([
      { hello: 'world1' },
      { hello: 'world4' },
      { hello: 'world3' },
      { hello: 'world2' }
    ]);
  });

  it('should throw error when passing invalid arguments', () => {
    let arr = ['a', 'b', 'c'];
    expect(() => {
      swapArray(arr, 0, 3);
    }).toThrow();
    expect(() => {
      swapArray(arr, 4, 2);
    }).toThrow();
    expect(() => {
      swapArray(arr, 4, 8);
    }).toThrow();
  });
});
