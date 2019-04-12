import loop from '../../functions/utility/loop';

describe('loop', () => {
  it('will loop n times and return undefined ', () => {
    let arr: number[] = [];

    expect(
      loop(10, index => {
        arr.push(index);
      })
    ).toBeUndefined();

    expect(arr).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    let arr2: number[] = [];

    expect(
      loop(0, index => {
        arr2.push(index);
      })
    ).toBeUndefined();

    expect(arr2).toEqual([]);
  });

  it('will throw error when passing invalid number', () => {
    expect(() => {
      loop(-1, () => {});
    }).toThrow();

    expect(() => {
      loop(Number.MAX_SAFE_INTEGER + 1, () => {});
    }).toThrow();

    expect(() => {
      loop(10.5, () => {});
    }).toThrow();
  });
});
