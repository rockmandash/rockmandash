import indexOfAll from '../../functions/array-string/indexOfAll';

describe('indexOfAll', () => {
  it('returns all indices of value in the array. If value never occurs, returns []', () => {
    expect(indexOfAll([1, 2, 3, 1, 2, 3], 1)).toEqual([0, 3]);
    expect(indexOfAll([1, 2, 3], 4)).toEqual([]);
    expect(indexOfAll([0, 1, 2, 3, 4, 5], 3)).toEqual([3]);
    expect(indexOfAll([0, 1, 2, 2, 4, 5], 2)).toEqual([2, 3]);

    expect(indexOfAll([{}, {}], {})).toEqual([]); // only shallow compare

    expect(indexOfAll(['hello', 'world'], 'world')).toEqual([1]);
  });

  it('counts the occurrences of a substring in a string. (case sensitive).', () => {
    expect(indexOfAll('the magical unicorn is magic', 'magic')).toEqual([
      4,
      23
    ]);
    expect(indexOfAll('@@@@@@@@@@', '@')).toEqual([
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ]);
    expect(indexOfAll('@x@Y@x@', '@')).toEqual([0, 2, 4, 6]);
    expect(indexOfAll('@x@Y@x@', 'x')).toEqual([1, 5]);
    expect(indexOfAll('../../../../../../', '../')).toEqual([
      0,
      3,
      6,
      9,
      12,
      15
    ]);
    expect(indexOfAll('🎈x🎈x🎈', '🎈')).toEqual([0, 3, 6]); // '🎈'.length === 2
    expect(indexOfAll('hello', 'world')).toEqual([]);
  });

  it('handles edge case', () => {
    expect(indexOfAll('', 'hello')).toEqual([]);
    expect(indexOfAll('hello', '')).toEqual([]);
  });

  it('handles overlap', () => {
    // none overlap
    expect(indexOfAll('ssss', 's')).toEqual([0, 1, 2, 3]);
    expect(indexOfAll('ssss', 'ss')).toEqual([0, 2]);
    expect(indexOfAll('ssss', 'sss')).toEqual([0]);
    expect(indexOfAll('ssss', 'ssss')).toEqual([0]);
    expect(indexOfAll('ssss', 'sssss')).toEqual([]);

    // overlap
    expect(indexOfAll('ssss', 's', true)).toEqual([0, 1, 2, 3]);
    expect(indexOfAll('ssss', 'ss', true)).toEqual([0, 1, 2]);
    expect(indexOfAll('ssss', 'sss', true)).toEqual([0, 1]);
    expect(indexOfAll('ssss', 'ssss', true)).toEqual([0]);
    expect(indexOfAll('ssss', 'sssss', true)).toEqual([]);
  });
});
