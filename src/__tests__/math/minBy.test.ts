import minBy from '../../functions/math/minBy';

describe('minBy', () => {
  it('finds min value in all items of property in an Array based on provided callback', () => {
    const data = [
      { value: 1, k: 123 },
      { hello: 2, value: 10 },
      { value: 3 },
      { value: 4 }
    ];

    expect(minBy(data, item => item.value)).toEqual(1);

    expect(minBy(data, 'value')).toEqual(1);
  });

  it('will throw error when passing invalid number ', () => {
    expect(() => {
      minBy([], () => 123);
    }).toThrow();
  });
});
