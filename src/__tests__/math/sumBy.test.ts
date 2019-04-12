import sumBy from '../../functions/math/sumBy';

describe('sumBy', () => {
  it('adds all items of property in an Array based on provided callback', () => {
    const data = [
      { value: 1, k: 123 },
      { hello: 2, value: 10 },
      { value: 3 },
      { value: 4 }
    ];

    expect(sumBy(data, item => item.value)).toEqual(18);

    expect(sumBy(data, 'value')).toEqual(18);
  });
});
