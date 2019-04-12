import maxBy from '../../functions/math/maxBy';

describe('maxBy', () => {
  it('finds max value in all items of property in an Array based on provided callback', () => {
    const data = [
      { value: 1, k: 123 },
      { hello: 2, value: 10 },
      { value: 3 },
      { value: 4 }
    ];

    expect(maxBy(data, item => item.value)).toEqual(10);

    expect(maxBy(data, 'value')).toEqual(10);
  });

  it('will throw error when passing invalid number ', () => {
    expect(() => {
      maxBy([], () => 123);
    }).toThrow();
  });
});
