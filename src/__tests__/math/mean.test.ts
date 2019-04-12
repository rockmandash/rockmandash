import mean from '../../functions/math/mean';

describe('mean', () => {
  it('finds mean value from all number in an Array', () => {
    expect(mean([0, 1, 2, 3, 4, 5])).toEqual(2.5);
  });

  it('will throw error when passing invalid number ', () => {
    expect(() => {
      mean([]);
    }).toThrow();
  });
});
