import count from '../../functions/array-string/count';

describe('count', () => {
  it('counts the occurrences of a value in an array.', () => {
    expect(count([0, 1, 2, 3, 4, 5], 3)).toBe(1);
    expect(count([0, 1, 2, 2, 4, 5], 2)).toBe(2);

    expect(count(['hello', 'world'], 'test')).toBe(0);
    expect(count(['hello', 'world'], 'world')).toBe(1);

    expect(count([{}, {}], {})).toBe(0); // only shallow compare
  });

  it('counts the occurrences of a substring in a string. (case sensitive).', () => {
    expect(count('the magical unicorn is magic', 'magic')).toBe(2);
    expect(count('@@@@@@@@@@', '@')).toBe(10);
    expect(count('@x@Y@x@', 'Y')).toBe(1);
    expect(count('@x@Y@x@', 'x')).toBe(2);
    expect(count('../../../../../../', '../')).toBe(6);
    expect(count('🎈x🎈x🎈', '🎈')).toBe(3);
    expect(count('hello', 'world')).toBe(0);
  });

  it('handles edge case', () => {
    expect(count('', 'hello')).toBe(0);
    expect(count('hello', '')).toBe(6);
  });

  it('handles overlap', () => {
    // none overlap
    expect(count('ssss', 's')).toBe(4);
    expect(count('ssss', 'ss')).toBe(2);
    expect(count('ssss', 'sss')).toBe(1);
    expect(count('ssss', 'ssss')).toBe(1);
    expect(count('ssss', 'sssss')).toBe(0);

    // overlap
    expect(count('ssss', 's', true)).toBe(4);
    expect(count('ssss', 'ss', true)).toBe(3);
    expect(count('ssss', 'sss', true)).toBe(2);
    expect(count('ssss', 'ssss', true)).toBe(1);
    expect(count('ssss', 'sssss', true)).toBe(0);
  });
});
