import compact from '../../functions/array/compact';

describe('compact', () => {
  it('removes all falsey types in Array', () => {
    expect(
      compact([
        0,
        1,
        null,
        2,
        undefined,
        null,
        NaN,
        3,
        4,
        false,
        5,
        '',
        [],
        { hello: 'world' }
      ])
    ).toEqual([1, 2, 3, 4, 5, [], { hello: 'world' }]);

    expect(compact([1, '', 3, null, 0])).toEqual([1, 3]);
  });
});
