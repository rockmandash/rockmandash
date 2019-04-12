import intersection from '../../functions/array/intersection';

describe('intersection', () => {
  it('intersecs arrays and return unique new Array.', () => {
    expect(
      intersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7], [3, 4, 5, 8, 9])
    ).toEqual([3, 4, 5]);

    const helloWorld = {
      hello: 'world'
    };

    expect(
      intersection(
        [1, 2, helloWorld, 3, 4, 5],
        [3, helloWorld, 4, 5, 6, 7],
        [3, 4, 5, helloWorld, 8, 9]
      )
    ).toEqual([helloWorld, 3, 4, 5]);

    expect(
      intersection(
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        ['A', 'B']
      )
    ).toEqual([]);

    expect(intersection([1, 1], [1, 1], [1, 1])).toEqual([1]);
  });
});
