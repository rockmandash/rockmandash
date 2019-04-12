import pullAt from '../../functions/array/pullAt';

describe('pullAt', () => {
  it('should modify the array and return removed elements', function() {
    let arr = [1, 2, 3];
    let pulled = pullAt(arr, [0, 1]);

    expect(arr).toEqual([3]);
    expect(pulled).toEqual([1, 2]);

    let arr2 = [4, 5, 6];
    let pulled2 = pullAt(arr2, 1);

    expect(arr2).toEqual([4, 6]);
    expect(pulled2).toBe(5);
  });

  it('should work with unsorted indexes', function() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    let pulled = pullAt(arr, [1, 3, 11, 7, 5, 9]);

    expect(arr).toEqual([1, 3, 5, 7, 9, 11]);
    expect(pulled).toEqual([2, 4, 12, 8, 6, 10]);
  });

  it('will throw error when passing invalid number', () => {
    expect(() => {
      pullAt([1, 2, 3, 4], [0, 0, 2]);
    }).toThrow();

    expect(() => {
      pullAt([1, 2, 3, 4], [0.5]);
    }).toThrow();

    expect(() => {
      pullAt([1, 2, 3, 4], 1.5);
    }).toThrow();

    expect(() => {
      pullAt([1, 2, 3, 4], [4]);
    }).toThrow();
  });

  it('should return an empty array when no indexes are given', function() {
    expect(pullAt([1, 2, 3], [])).toEqual([]);
  });
});
