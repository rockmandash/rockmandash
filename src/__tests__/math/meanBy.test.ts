import meanBy from '../../functions/math/meanBy';

describe('meanBy', () => {
  it('finds mean value from all items of property in an Array based on provided callback', () => {
    const data = [
      { value: 1, k: 123 },
      { hello: 2, value: 10 },
      { value: 3 },
      { value: 4 }
    ];

    expect(meanBy(data, item => item.value)).toEqual(4.5);

    expect(meanBy(data, 'value')).toEqual(4.5);
  });

  it('will throw error when passing invalid number ', () => {
    expect(() => {
      meanBy([], () => 123);
    }).toThrow();
  });
});
